FROM node:22.9.0

WORKDIR /app

COPY package*.json ./

RUN npm install -g npm@11.6.2

RUN npm install -g @evershop/evershop

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]
