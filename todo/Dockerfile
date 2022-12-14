FROM node:18-alpine  
WORKDIR /app
COPY . .
RUN npm install
RUN npm run dev
EXPOSE 5173
ENV HOST=0.0.0.0
CMD [ "npm", "start" ]
