const express = require('express')
const router = express.Router();
const path = require('path')

//Admin home 
router.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname,'..','public','views','shop.html'))
  })

  //
router.post('/add-product', (req, res) => {
  res.send('Product added',+ req.body)
})


module.exports = router;