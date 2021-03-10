FROM node:14

WORKDIR /app

COPY ["package.json", "./"]

RUN npm install

COPY . /app

EXPOSE 5051

CMD [ "npm", "run", "dev-js" ]