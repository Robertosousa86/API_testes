import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send({
    firstServer: "Only for test",
    Status: "OK!",
  });
});

export default app;