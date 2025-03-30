import { Helmet } from 'react-helmet';
import { useAuth } from 'react-oidc-context';
import { Navbar } from './navbar';
import { Routes, Route } from 'react-router-dom';
import { Authenticated } from './Authenticated';
import { Unauthenticated } from './Unauthenticated';
import { Footer } from '../public/footer';

export function App() {
  const auth = useAuth();

  if (auth.isAuthenticated) {
    return <Authenticated />;
  }

  return (
    <div className="flex flex-col w-full max-w-[1280px] m-auto min-h-screen justify-between ">
      <Helmet>
        <title>{import.meta.env.VITE_TITLE || 'Company/AppName'}</title>
      </Helmet>
      <div>
        <Navbar loginSection={auth.isAuthenticated} />

        <div>
          <Routes>
            <Route path="/*" element={<Unauthenticated />}></Route>
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
