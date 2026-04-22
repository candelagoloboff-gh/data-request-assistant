import { lazy, Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { ThemeProvider } from '@material-hu/mui/styles';
import { createHuGoTheme } from '@material-hu/theme/hugo';

import { DialogLayerProvider } from '@material-hu/components/layers/Dialogs';
import { DrawerLayerProvider } from '@material-hu/components/layers/Drawers';
import { MenuLayerProvider } from '@material-hu/components/layers/Menus';

import { ChatPage } from './pages/Chat';
import { AuthProvider, useAuth } from './providers/AuthContext';
import './i18n';

const theme = createHuGoTheme();
const queryClient = new QueryClient();

const LoginPage = lazy(() => import('./pages/Auth/Login'));
const CallbackPage = lazy(() => import('./pages/Auth/Callback'));

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" replace />;
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <MenuLayerProvider>
            <DialogLayerProvider>
              <DrawerLayerProvider>
                <BrowserRouter>
                  <Suspense fallback={null}>
                    <Routes>
                      <Route
                        path="/"
                        element={<ProtectedRoute><ChatPage /></ProtectedRoute>}
                      />
                      <Route path="/login" element={<LoginPage />} />
                      <Route path="/callback" element={<CallbackPage />} />
                    </Routes>
                  </Suspense>
                </BrowserRouter>
              </DrawerLayerProvider>
            </DialogLayerProvider>
          </MenuLayerProvider>
        </AuthProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
