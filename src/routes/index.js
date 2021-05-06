import express from "express";
import productsRoute from "./products";

const router = express.Router();

router.use("/products", productsRoute);

router.get("/", (req, res) => {
  res.send({
    firstServer: "Only for test",
    Status: "OK!",
  });
});

export default router;
