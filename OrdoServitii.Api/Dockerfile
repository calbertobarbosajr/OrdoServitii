# Stage 1: Dependências
FROM node:22-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

# Stage 2: Build
FROM node:22-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build && ls -la dist

# Stage 3: Produção
FROM node:22-alpine
WORKDIR /app

# Copia o package.json (que contém "type": "module")
COPY package*.json ./

# Instala APENAS dependências de produção
RUN npm ci --omit=dev

# Copia os arquivos compilados do stage anterior
COPY --from=builder /app/dist ./dist

EXPOSE 3001

# Usa o script definido no package.json ("start": "node dist/index.js")
# Isso garante que o Node respeite as configurações do package.json
CMD ["npm", "start"]