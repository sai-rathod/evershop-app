FROM node:22.9.0

WORKDIR /app

COPY package*.json /app/

RUN npm install -g npm@11.6.2

COPY . . 

RUN npm run build

EXPOSE 3000

CMD ["npm","run","start"]


