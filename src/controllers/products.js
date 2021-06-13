// O método get deve receber os objetos de requisição e resposta e enviar um array com um produto srestático como resposta.
class ProductsController {
  constructor(Product) {
    this.Product = Product;
  }

  async get(req, res) {
    const products = await this.Product.find({});
    res.send(products);
  }
}

export default ProductsController;
