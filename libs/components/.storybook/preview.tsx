import React from 'react';

import { Preview } from '@storybook/react';
import { Denuncia } from '@oidc-sample/api-interfaces';
import { StoreProvider } from '@oidc-sample/redux-store';
import { BrowserRouter } from 'react-router-dom';
import { DenunciaContext } from '../src/lib/admin/denuncias/denuncia-context';
import '../src/styles.css';
import d from './denuncia1';

const denuncia: Denuncia = d as any as Denuncia;

const preview: Preview = {
  decorators: [
    (Story, { parameters }) => (
      <BrowserRouter>
        <StoreProvider>
          <DenunciaContext.Provider value={denuncia}>
            <Story />
          </DenunciaContext.Provider>
        </StoreProvider>
      </BrowserRouter>
    ),
  ],
};

export default preview;
