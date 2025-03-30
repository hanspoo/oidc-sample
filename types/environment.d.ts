declare global {
  namespace NodeJS {
    interface ProcessEnv {
      VITE_AUTHORITY: string;
      VITE_CLIENT_ID: string;
      VITE_TITLE: string;
      VITE_APP_NAME: string;
    }
  }

  interface ImportMetaEnv {
    VITE_ZITADEL_SERVER: string;
  }
}

export {};
