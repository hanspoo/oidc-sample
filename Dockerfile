FROM node:20-alpine3.20
# RUN git clone git@github.com:hanspoo/oidc-sample
COPY . /oidc-sample
WORKDIR /oidc-sample
RUN npm install
RUN npm run build

FROM node:20-alpine3.20
COPY --from=0 /oidc-sample/dist/apps/  /apps/
COPY --from=0 /oidc-sample/node_modules /apps/node_modules
COPY .env /apps/web-server
WORKDIR  /apps/web-server
CMD  node main.js
