const express = require('express')
const router = express.Router();
const path = require('path')
const productcontrollers = require('../controllers/products')

router.use(express.json())
//Admin home 
router.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname,'..','public','views','shop.html'))
  })

  //Admin add product
router.get('/add-product', (req, res) => {
  res.sendFile(path.join(__dirname,'..','public','views','add-product.html'))
})

router.post('/add-product',productcontrollers.addProduct)

module.exports = router;
