import { useEffect, useRef } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import Stack from '@material-hu/mui/Stack';

import Spinner from '@material-hu/components/design-system/ProgressIndicators/Spinner';

import { useAuth } from '../../../providers/AuthContext';
import { PKCE_VERIFIER_KEY } from '../Login/constants';

const CallbackPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { setToken } = useAuth();
  const hasExecuted = useRef(false);

  useEffect(() => {
    if (hasExecuted.current) return;
    hasExecuted.current = true;

    const code = searchParams.get('code');
    const verifier = sessionStorage.getItem(PKCE_VERIFIER_KEY);

    if (!code || !verifier) {
      void navigate('/login', { replace: true });
      return;
    }

    const janusUrl = import.meta.env.VITE_JANUS_URL as string;
    const clientId = import.meta.env.VITE_CLIENT_ID as string;
    const redirectUri = `${window.location.origin}/callback`;

    fetch(`${janusUrl}/oauth2/token`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        grant_type: 'authorization_code',
        code,
        redirect_uri: redirectUri,
        client_id: clientId,
        code_verifier: verifier,
      }).toString(),
    })
      .then(async res => {
        if (!res.ok) throw new Error(`Token exchange failed: ${res.status}`);
        const data = (await res.json()) as { access_token: string };
        sessionStorage.removeItem(PKCE_VERIFIER_KEY);
        setToken(data.access_token);
        void navigate('/', { replace: true });
      })
      .catch(() => {
        void navigate('/login', { replace: true });
      });
  }, [searchParams, navigate, setToken]);

  return (
    <Stack
      sx={{
        minHeight: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Spinner />
    </Stack>
  );
};

export default CallbackPage;
