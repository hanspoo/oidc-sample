import { AuthProvider } from 'react-oidc-context';

import { App } from './app';
import { useMemo } from 'react';

const newURL =
  window.location.protocol +
  '//' +
  window.location.host +
  window.location.pathname;

export function MetaApp() {
  const scope = 'openid email profile ';

  const VITE_AUTHORITY = import.meta.env.VITE_AUTHORITY;
  const VITE_CLIENT_ID = import.meta.env.VITE_CLIENT_ID;
  if (!VITE_AUTHORITY)
    return <Centered>Configuration error, authority not defined</Centered>;
  if (!VITE_CLIENT_ID)
    return <Centered>Configuration error, client id not defined</Centered>;

  const oidcConfig = {
    authority: VITE_AUTHORITY,
    client_id: VITE_CLIENT_ID,
    scope,
    redirect_uri: `${newURL}`,
    post_logout_redirect_uri: `${newURL}`,
  };

  console.log({ oidcConfig });

  return (
    <AuthProvider {...oidcConfig}>
      <App />
    </AuthProvider>
  );
}

export function Centered({ children }: React.PropsWithChildren) {
  return (
    <div className="min-w-screen min-h-screen flex items-center justify-center">
      {children}
    </div>
  );
}
