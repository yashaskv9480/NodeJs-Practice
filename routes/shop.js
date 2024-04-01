const path = require('path')
const express = require('express')
const router = express.Router()

//home page serving shop html
router.get('/home', (req, res) => {
    res.sendFile (path.join(__dirname,'..','public','views','shop.html'))
})

router.get('/add-product', (req, res) => {
    res.sendFile (path.join(__dirname,'..','public','views','add-product.html'))
  })

module.exports = router;