import express from "express";
import bodyParser from "body-parser";

const PORT = 3000;

const app = express();

app.get("/", (req, res) => {
  res.send({
    firstServer: "Only for test",
    Status: "OK!",
  });
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
