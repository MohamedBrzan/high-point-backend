const router = require('express').Router();

const GetAllProducts = require('../controllers/Product/GetAllProducts');
const GetProductById = require('../controllers/Product/GetProductById');
const CreateProduct = require('../controllers/Product/CreateProduct');
const UpdateProduct = require('../controllers/Product/UpdateProduct');
const DeleteProduct = require('../controllers/Product/DeleteProduct');
const GetAllItems = require('../controllers/Product/item/GetAllItems');
const GetItemById = require('../controllers/Product/item/GetItemById');
const CreateItem = require('../controllers/Product/item/CreateItem');
const UpdateItem = require('../controllers/Product/item/UpdateItem');
const DeleteItem = require('../controllers/Product/item/DeleteItem');

// Get & Post & Put & Delete Product

router.route('/').get(GetAllProducts).post(CreateProduct);

// Get & Post & Put & Delete Product

router
  .route('/:product_id')
  .post(CreateItem)
  .get(GetProductById)
  .put(UpdateProduct)
  .delete(DeleteProduct);

// Get & Post Product Items

router.route('/:product_id/items').get(GetAllItems);

//  Put & Delete Product Items

router
  .route('/:product_id/items/:item_id')
  .get(GetItemById)
  .put(UpdateItem)
  .delete(DeleteItem);

module.exports = router;
