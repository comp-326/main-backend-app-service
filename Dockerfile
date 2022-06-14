FROM node:16.5.0
WORKDIR /exam-cell-server
COPY package.json .
COPY yarn.lock .
RUN yarn install
COPY . .
EXPOSE 5001
CMD ["yarn", "dev"]
