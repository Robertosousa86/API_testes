// O server.js é o arquivo responsável por inicializar a aplicação, chamando o app.
import app from "./app";
require('dotenv').config()

const PORT = process.env.HOST;

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});

const name = process.env.MONGODB_URL

console.log(name);