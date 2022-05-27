FROM node:lts

RUN mkdir backend

WORKDIR /backend

COPY package.json .

RUN npm install

COPY . .

RUN npx prisma generate

RUN npx tsc

EXPOSE 4000

CMD [ "node", "dist/infra/http/express/server" ]