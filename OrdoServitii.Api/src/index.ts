import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import { logger } from 'hono/logger';

const app = new Hono();

// Middleware de log para ver as requisições no console do Kubernetes
app.use('*', logger());

// Rota de Health Check (OBRIGATÓRIA para o seu readinessProbe funcionar)
app.get('/health', (c) => {
  return c.json({ status: 'ok', message: 'API OrdoServitii está rodando!' });
});

// Rota raiz de teste
app.get('/', (c) => {
  return c.text('Bem-vindo à API OrdoServitii!');
});

const port = 3001;
console.log(`🚀 Servidor OrdoServitii iniciando na porta ${port}...`);

// Inicia o servidor
serve({
  fetch: app.fetch,
  port,
});