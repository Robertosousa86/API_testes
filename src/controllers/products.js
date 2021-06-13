// O método get deve receber os objetos de requisição e resposta e enviar um array com um produto estático como resposta.
class ProductsController {
  constructor(Product) {
    this.Product = Product;
  }

  async get(req, res) {
    try {
      const products = await this.Product.find({});
      res.send(products);
    } catch (err) {
      res.status(400).send(err.message);
    }
  }
}

export default ProductsController;
