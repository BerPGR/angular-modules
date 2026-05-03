FROM node:22-alpine AS build

WORKDIR /app

COPY ./package* .

RUN npm i

COPY . .

RUN npm run build --prod


#etapa 2 - rodar a aplicação
FROM nginx:alpine

RUN rm -rf /usr/shade/nginx/html/*

COPY --from=build /app/dist/passeio-app/browser /usr/shade/nginx/html

EXPOSE 80

ENTRYPOINT nginx -g 'daemon off';