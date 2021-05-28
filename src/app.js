// Tem a responsábilidade de iniciar e carregar os middlewares
import express from 'express';
import routes from './routes';

const app = express();

app.use('/', routes);

export default app;
