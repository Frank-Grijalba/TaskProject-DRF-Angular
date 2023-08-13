# Stage 1

FROM node:18.10 as node

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build --prod

# stage 2

FROM nginx:alpine

COPY --from=node /app/dist/frontend /usr/share/nginx/html 

# EXPOSE 4200
# RUN NODE_ENV=development npm i 
# RUN npm install
# RUN npm run build
