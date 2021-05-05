import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send({
    firstServer: "Only for test",
    Status: "OK!",
  });
});

app.get("/products", (req, res) => {
  res.send([
    {
      name: "Default product",
      description: "product description",
      price: 100,
    },
  ]);
});

export default app;
