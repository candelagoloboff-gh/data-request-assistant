import {
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

const TOKEN_KEY = 'auth_token';

type AuthContextValue = {
  token: string | null;
  setToken: (token: string) => void;
  clearToken: () => void;
  isAuthenticated: boolean;
  userName: string | null;
};

const AuthContext = createContext<AuthContextValue | null>(null);

async function fetchUserName(token: string): Promise<string | null> {
  try {
    const res = await fetch('/api/janus/userinfo', {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!res.ok) return null;
    const data = (await res.json()) as { name?: string; given_name?: string; email?: string };
    return data.name ?? data.given_name ?? data.email ?? null;
  } catch {
    return null;
  }
}

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setTokenState] = useState<string | null>(() =>
    sessionStorage.getItem(TOKEN_KEY),
  );
  const [userName, setUserName] = useState<string | null>(null);

  useEffect(() => {
    if (token) {
      fetchUserName(token).then((name) => setUserName(name));
    } else {
      setUserName(null);
    }
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
      value={{ token, setToken, clearToken, isAuthenticated: token !== null, userName }}
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
