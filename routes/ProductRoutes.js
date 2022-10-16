const router = require('express').Router();

const GetProductById = require('../controllers/Product/GetProductById');
const CreateProduct = require('../controllers/Product/CreateProduct');
const UpdateProduct = require('../controllers/Product/UpdateProduct');
const DeleteProduct = require('../controllers/Product/DeleteProduct');
const GetItemById = require('../controllers/Product/item/GetItemById');
const CreateItem = require('../controllers/Product/item/CreateItem');
const UpdateItem = require('../controllers/Product/item/UpdateItem');
const DeleteItem = require('../controllers/Product/item/DeleteItem');

// Get & Post & Put & Delete Product

router
  .route('/')
  .get(GetProductById)
  .post(CreateProduct)
  .put(UpdateProduct)
  .delete(DeleteProduct);

// Get & Post & Put & Delete Product Items

router
  .route('/item')
  .get(GetItemById)
  .post(CreateItem)
  .put(UpdateItem)
  .delete(DeleteItem);

module.exports = router;
