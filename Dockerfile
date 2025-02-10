FROM node:20 AS build

WORKDIR /app

COPY package.json package-lock.json* ./

RUN npm install --frozen-lockfile

COPY . .

RUN npm run build

FROM node:20-slim

WORKDIR /app

COPY --from=build /app/package.json /app/package-lock.json* ./
COPY --from=build /app/.next ./.next

RUN npm install --production --frozen-lockfile

EXPOSE 3000

CMD ["npm", "start"]
