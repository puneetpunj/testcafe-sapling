FROM testcafe/testcafe

USER root

RUN mkdir app
WORKDIR /app

COPY package.json ./

CMD npm run test:firefox
