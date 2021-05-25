// O server.js é o arquivo responsável por inicializar a aplicação, chamando o app.
import app from "./app";

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
