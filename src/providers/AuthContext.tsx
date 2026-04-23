import {
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

const TOKEN_KEY = 'auth_token';

function decodeJWTPayload(token: string): Record<string, unknown> | null {
  try {
    const payload = token.split('.')[1];
    if (!payload) return null;
    return JSON.parse(atob(payload.replace(/-/g, '+').replace(/_/g, '/'))) as Record<string, unknown>;
  } catch {
    return null;
  }
}

function extractFromJWT(token: string): { name: string | null; email: string | null } {
  const p = decodeJWTPayload(token);
  if (!p) return { name: null, email: null };
  const name = (p.name ?? p.given_name ?? p.preferred_username ?? p.displayName ?? null) as string | null;
  const email = (p.email ?? p.sub ?? null) as string | null;
  return { name, email };
}

type AuthContextValue = {
  token: string | null;
  setToken: (token: string) => void;
  clearToken: () => void;
  isAuthenticated: boolean;
  userName: string | null;
  userEmail: string | null;
};

const AuthContext = createContext<AuthContextValue | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setTokenState] = useState<string | null>(() =>
    sessionStorage.getItem(TOKEN_KEY),
  );
  const [userName, setUserName] = useState<string | null>(() => {
    const t = sessionStorage.getItem(TOKEN_KEY);
    return t ? extractFromJWT(t).name : null;
  });
  const [userEmail, setUserEmail] = useState<string | null>(() => {
    const t = sessionStorage.getItem(TOKEN_KEY);
    return t ? extractFromJWT(t).email : null;
  });

  useEffect(() => {
    if (!token) {
      setUserName(null);
      setUserEmail(null);
      return;
    }
    // First: try to get from JWT directly (instant)
    const jwt = extractFromJWT(token);
    if (jwt.name) setUserName(jwt.name);
    if (jwt.email) setUserEmail(jwt.email);

    // Then: try userinfo endpoint (may have more complete data)
    fetch('/api/janus/userinfo', { headers: { Authorization: `Bearer ${token}` } })
      .then(async (res) => {
        if (!res.ok) return;
        const data = (await res.json()) as Record<string, unknown>;
        const name = (data.name ?? data.given_name ?? data.preferred_username ?? data.displayName ?? data.display_name) as string | null;
        const email = (data.email ?? data.sub) as string | null;
        if (name) setUserName(name);
        if (email) setUserEmail(email);
      })
      .catch(() => {});
  }, [token]);

  const setToken = useCallback((newToken: string) => {
    sessionStorage.setItem(TOKEN_KEY, newToken);
    setTokenState(newToken);
  }, []);

  const clearToken = useCallback(() => {
    sessionStorage.removeItem(TOKEN_KEY);
    setTokenState(null);
  }, []);

  return (
    <AuthContext.Provider
      value={{ token, setToken, clearToken, isAuthenticated: token !== null, userName, userEmail }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextValue => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
};
