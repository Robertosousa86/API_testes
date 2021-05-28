// Tem a responsábilidade de iniciar a aplicação e carregar os middlewares
import express from 'express';
import routes from './routes';
import database from './config/database';

const app = express();
// Configura o express e retornar uma nova instância da aplicação configurada.
const configureExpress = () => {
  app.use('/', routes);
  app.database = database;

  return app;
};
// Exporta uma função que retorna uma promise, assim que a promise for resolvida significa que o DB está diponível.
export default async () => {
  const app = configureExpress();
  await app.database.connect();

  return app;
};
