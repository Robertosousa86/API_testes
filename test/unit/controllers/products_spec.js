// Engloba todos os testes do controller de products.
import sinon from 'sinon';
import ProductsController from '../../../src/controllers/products';
import Product from '../../../src/models/product';

describe('Controllers: Products', () => {
  // informações estáticas que serão reaproveitadas para testes
  const defaultProduct = [
    {
      name: 'Default product',
      description: 'product description',
      price: 100,
    },
  ];

  describe('get() products', () => {
    it('Should return a list of products', async () => {
      const request = {};
      // os spies permitem gravar informações como quantas vezes uma função foi chamada, quais parâmetros ela recebeu e etc.
      const response = {
        send: sinon.spy(),
      };

      Product.find = sinon.stub();

      Product.find.withArgs({}).resolves(defaultProduct);

      const productsController = new ProductsController(Product);

      await productsController.get(request, response);

      sinon.assert.calledWith(response.send, defaultProduct);
    });

    it('should  return 400 when an error occurs', async () => {
      const request = {};
      const response = {
        send: sinon.spy(),
        status: sinon.stub(),
      };

      response.status.withArgs(400).returns(response);

      Product.find = sinon.stub();
      Product.find.withArgs({}).rejects({ message: 'Error' });

      const productsController = new ProductsController(Product);

      await productsController.get(request, response);

      sinon.assert.calledWith(response.send, 'Error');
    });
  });
});
