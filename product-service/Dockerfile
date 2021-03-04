FROM node:14
ENV PGUSER=postgres 
ENV PGHOST=db
ENV PGPASSWORD=postgres

WORKDIR /app

COPY ["package.json", "./"]

RUN npm install

COPY . /app

EXPOSE 5050

CMD [ "npm", "run", "dev-js" ]