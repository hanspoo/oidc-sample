import { useAuth } from 'react-oidc-context';

export function Unauthenticated() {
  const auth = useAuth();

  if (auth.isLoading) return null;

  return (
    <div className="hero min-h-[640px]">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-3xl font-bold">Login to the system</h1>
          {auth.error ? <ErrorUI /> : <LoginUI />}
        </div>
      </div>
    </div>
  );
}

export function ErrorUI() {
  const auth = useAuth();

  return (
    <div>
      <div role="alert" className="my-6 flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 shrink-0 stroke-current mr-1"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
        <span>The authentication server can't be contacted</span>
      </div>
      <button className="btn btn-primary" onClick={() => auth.signinRedirect()}>
        Continue
      </button>
    </div>
  );
}

export function LoginUI() {
  const auth = useAuth();

  return (
    <div>
      <p className="py-6">
        Click to start a new sessión in{' '}
        {import.meta.env.VITE_APP_NAME || 'AppName'}
      </p>
      <button
        className="btn btn-primary"
        onClick={() => void auth.signinRedirect()}
      >
        Login
      </button>
    </div>
  );
}
