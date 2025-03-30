import { Routes, Route } from 'react-router-dom';

import { LandingHome } from '../public/landing';

export function Unauthenticated() {
  return (
    <Routes>
      <Route path="/" element={<LandingHome />}></Route>
    </Routes>
  );
}
