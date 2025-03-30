import { useAuth } from 'react-oidc-context';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { Bars4Icon, HomeIcon } from '@heroicons/react/24/solid';
import { UserDropdown } from './user-dropdown';

import { useAxios } from '../hooks/useAxios';
import axios from 'axios';
import { AuthenticatedContent } from './AuthenticatedContent';
import logo from '../images/logo.png';

export function Authenticated() {
  const auth = useAuth();

  const [height, setHeight] = useState(0);

  useEffect(() => {
    const updateWindowDimensions = () => {
      const newHeight = window.innerHeight;
      setHeight(newHeight);
    };

    window.addEventListener('resize', updateWindowDimensions);

    return () => window.removeEventListener('resize', updateWindowDimensions);
  }, []);

  if (!auth) {
    return <p>Ha ocurrido un error 1541</p>;
  }

  return (
    <div className="drawer lg:drawer-open p-0 min-h-dvh z-50">
      <Helmet>
        <title>{import.meta.env.VITE_TITLE || 'Company/AppName'}</title>
      </Helmet>
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content ">
        <div className="flex flex-col  ">
          <div>
            <div className="flex justify-between mr-2  items-center pl-4 pt-4 ">
              <Link
                to="/admin/denuncias"
                className="text-lg font-bold flex md:opacity-0 cursor-pointer"
              >
                <img alt="Logo" src={logo} className="h-8 mr-1.5" />

                <span className="text-2xl font-light">
                  {import.meta.env.VITE_APP_NAME || 'AppName'}
                </span>
              </Link>
              <div className="flex bg-coral-400 items-center">
                <UserDropdown auth={auth} />
                <label
                  htmlFor="my-drawer-2"
                  className="drawer-button md:hidden   flex items-end justify-end"
                >
                  <Bars4Icon className="w-6 cursor-pointer ml-2" />
                </label>
              </div>
            </div>
          </div>
          <AuthenticatedContent />
        </div>
      </div>

      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay "
        ></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-64">
          <li>
            <div className="flex items-center mb-4">
              <a href="/admin" className="text-lg">
                <img alt="Logo" src={logo} className="h-8 mr-0" />
              </a>
              <span className="text-2xl font-light">
                {import.meta.env.VITE_APP_NAME || 'AppName'}
              </span>
            </div>
          </li>
          <li>
            <Link to="/" className="flex">
              <HomeIcon className="h-4" />
              Home
            </Link>
          </li>

          <li>
            <details open>
              <summary>Configuration</summary>
              <ul>
                <li>
                  <Link to="/config/the-moon">The Moon</Link>
                </li>
                <li>
                  <Link to="/config/humans">Humans</Link>
                </li>
                <li>
                  <Link to="/config/solar-system">Solar System</Link>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
}

export function Estilos() {
  const [data, setData] = useState();
  const [error, setError] = useState('');
  const axios = useAxios();

  const cerrar = () => {
    axios
      .post(`/api/admin/close`)
      .then((response) => setData(response.data))
      .catch((error) => setError(error));
  };
  if (error)
    return <div className="alert alert-warning">{JSON.stringify(error)}</div>;
  if (data) return <div className="alert alert-info">{data}</div>;

  return (
    <div>
      <h3>Probar cierre de sesión</h3>
      <button className="btn" onClick={cerrar}>
        Enviar
      </button>
      <ObtenerSesion />
    </div>
  );
}

function ObtenerSesion() {
  const auth = useAuth();

  function leerSesion() {
    const config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `${import.meta.env.VITE_ZITADEL_SERVER}/v2/sessions/:sessionId`,
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer ' + auth.user?.access_token,
      },
    };

    console.log({ config });

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div>
      <h3>Obtener datos de sesión</h3>
      <button className="btn" onClick={leerSesion}>
        Enviar
      </button>
    </div>
  );
}
