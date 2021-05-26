// Engloba todos os testes do controller de products.
import sinon from "sinon";
import ProductsController from "../../../src/controllers/products";

describe("Controllers: Products", () => {
  // informações estáticas que serão reaproveitadas para testes
  const defaultProduct = [
    {
      name: "Default product",
      description: "product description",
      price: 100,
    },
  ];

  describe("get() products", () => {
    it("Should return a list of products", () => {
      const request = {};
      // os spies permitem gravar informações como quantas vezes uma função foi chamada, quais parâmetros ela recebeu e etc.
      const response = {
        send: sinon.spy(),
      };

      const productsController = new ProductsController();
      productsController.get(request, response);

      expect(response.send.called).to.be.true;
      expect(response.send.calledWith(productsController)).to.be.true;
    });
  });
});
