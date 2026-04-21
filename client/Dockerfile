# Etapa 1: Build
FROM node:20-alpine AS build

WORKDIR /app

# Copia apenas os arquivos de dependência primeiro (cache eficiente)
COPY package*.json ./
RUN npm install

# Copia o restante do código
COPY . .

# Gera o build de produção
RUN npm run build

# Etapa 2: Servir os arquivos estáticos
FROM node:20-alpine AS production

WORKDIR /app

# Instala um servidor leve para servir o dist
RUN npm install -g serve

# Copia apenas os arquivos finais do build
COPY --from=build /app/dist ./dist

EXPOSE 3000

# Comando para servir os arquivos
CMD ["serve", "-s", "dist", "-l", "3000"]

