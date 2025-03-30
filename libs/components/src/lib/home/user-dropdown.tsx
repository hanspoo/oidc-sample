import { useUserinfo } from './useUserinfo';
import { useState } from 'react';
import { Loading } from '../utils/loading';
import { DropdownMenu } from './DropdownMenu';
import { AuthContextProps } from 'react-oidc-context';

export function UserDropdown({ auth }: { auth: AuthContextProps }) {
  const { loading, error, userinfo } = useUserinfo();
  const [isLogginOut, setIsLogginOut] = useState(false);

  const handleLogout = () => {
    // auth.removeUser();
    // auth.signoutRedirect({ id_token_hint: auth.user?.id_token });
    auth.signoutSilent({ id_token_hint: auth.user?.id_token });
  };

  if (loading) return null;
  if (error)
    return (
      <div className="flex">
        <div>{error.error_description}</div>
        <button
          className="ml-2 btn btn-xs"
          onClick={() => auth.signoutSilent()}
        >
          Logout
        </button>
      </div>
    );

  if (!userinfo) return null;

  return (
    <div className="flex flex-col items-center ">
      {isLogginOut ? (
        <div className="flex item-center">
          <Loading className="w-4" />
          <span className="ml-2 text-sm ">Cerrando Sesión...</span>
        </div>
      ) : (
        <DropdownMenu userinfo={userinfo} handleLogout={handleLogout} />
      )}
    </div>
  );
}
