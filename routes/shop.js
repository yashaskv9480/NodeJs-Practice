const path = require('path')
const express = require('express')
const router = express.Router()
const productcontrollers = require('../controllers/products')
router.use(express.json())

//home page serving shop html
router.get('/home', (req, res) => {
    res.sendFile (path.join(__dirname,'..','public','views','shop.html'))
})

router.get('/get-product',productcontrollers.getProducts);

router.get('/add-product', (req, res) => {
    res.sendFile (path.join(__dirname,'..','public','views','add-product.html'))
  })

module.exports = router;