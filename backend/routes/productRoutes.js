const express=require('express')
const addProduct = require('../controller/addProduct')
const viewProduct = require('../controller/getProducts')
const productRuter=express.Router()

productRuter.post('/api/product/add', addProduct);
productRuter.get('/api/product/get', viewProduct);
module.exports=productRuter;