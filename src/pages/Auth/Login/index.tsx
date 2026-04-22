import Stack from '@material-hu/mui/Stack';

import {
  LoginLayout,
  SSOButton,
} from '@material-hu/components/composed-components/auth';
import Title from '@material-hu/components/design-system/Title';

import loginBanner from '../../../assets/login-banner.png';

import {
  generateCodeChallenge,
  generateCodeVerifier,
  PKCE_VERIFIER_KEY,
} from './constants';

const LoginPage = () => {
  const handleGoogleLogin = async () => {
    const janusUrl = import.meta.env.VITE_JANUS_URL as string;
    const clientId = import.meta.env.VITE_CLIENT_ID as string;
    const redirectUri = `${window.location.origin}/callback`;

    const verifier = generateCodeVerifier();
    const challenge = await generateCodeChallenge(verifier);

    sessionStorage.setItem(PKCE_VERIFIER_KEY, verifier);

    const params = new URLSearchParams({
      response_type: 'code',
      client_id: clientId,
      redirect_uri: redirectUri,
      code_challenge: challenge,
      code_challenge_method: 'S256',
    });

    // &continue is required — without it Janus returns 401
    window.location.href = `${janusUrl}/oauth2/authorize?${params.toString()}&continue`;
  };

  return (
    <LoginLayout banner={{ src: loginBanner }}>
      <Stack sx={{ flex: 1, justifyContent: 'center', gap: 3 }}>
        <Title
          title="Welcome"
          description="Sign in with your Google account"
          variant="L"
        />
        <SSOButton
          type="Google"
          onClick={() => void handleGoogleLogin()}
        />
      </Stack>
    </LoginLayout>
  );
};

export default LoginPage;
