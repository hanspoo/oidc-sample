import { WebUser } from '@oidc-sample/api-interfaces';
import { createContext } from 'react';

const u: WebUser = {
  email: '',
  isAdmin: false,
  permisos: [],
  name: '',
  id: '',
  createdAt: 0,
};
export const CurrentUserContext = createContext(u);
