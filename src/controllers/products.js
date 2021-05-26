// O método get deve receber os objetos de requisição e resposta e enviar um array com um produto srestático como resposta.
class ProductsController {
  get(req, res) {
    return res.send([
      {
        name: "Default product",
        description: "product description",
        price: 100,
      },
    ]);
  }
}

export default ProductsController;
