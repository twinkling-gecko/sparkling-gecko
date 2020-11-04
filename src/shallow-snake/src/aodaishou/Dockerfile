# ----- production実行ステージ -----

FROM node:latest as production

EXPOSE 3000

ENV HOST "0.0.0.0"
ENV PORT "3000"

WORKDIR /usr/src/app

COPY package.json .
COPY yarn.lock .
RUN yarn install

COPY . .
RUN yarn build
RUN yarn generate

CMD ["yarn", "serve"]

# ----- development実行ステージ -----
# NOTE: volumesでソースコードを/usr/src/appにマウントする前提

FROM node:latest as development

EXPOSE 3000

ENV HOST "0.0.0.0"
ENV PORT "3000"

WORKDIR /usr/src/app

CMD ["yarn", "nuxt-ts", "dev"]
