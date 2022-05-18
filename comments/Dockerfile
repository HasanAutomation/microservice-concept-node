FROM node:alipne

WORKDIR /app

COPY package.json .

RUN npm install

COPY ./ ./

CMD ["npm","start"]