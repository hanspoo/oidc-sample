# oidc react keycloak starter

This is a sample starter for a nx based react project:

- react
- keycloak
- react-oidc-context
- tailwind & daisyui
- Hamburger menu
- Sidebar when logged in

## Quick start

```
git clone https://github.com/hanspoo/oidc-sample
cd oidc-sample
npm install
```

Copy .env.sample to .env

```
cp .env.sample .env
```

In one terminal start the keycloak server with the quicktart realm configured:

```
cd docker-dev
docker compose up
```

This will keep the compose running in the terminal, if you like to send it
to the background use the -d argument `docker compose up -d`.

Start react app, in other terminal execute:

```
npm run dev
```
