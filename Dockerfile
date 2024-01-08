FROM node:lts as dev

WORKDIR /app

COPY . .

RUN npm install

VOLUME /app

EXPOSE 3001


CMD ["npm", "run" , "dev"]



FROM dev as prod  

WORKDIR /app

EXPOSE 3001

CMD ["npm", "run" , "start"]
