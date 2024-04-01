const express = require('express')
const app = express()
const adminroutes = require('./routes/admin');
const shoproutes = require('./routes/shop')
const path = require('path')
port = 3000
 
app.use('/admin',adminroutes)
app.use('/shop',shoproutes);

app.use("/next",(req, res, next) => {
    console.log("Middleware 1")
    next();
})

//res,redirect
app.use("/redirect",(req, res, next) => {
    console.log('Middleware 2')
    res.redirect("/send")
})

//res.send
app.use("/send",(req, res, next) => {
    res.send("<h1>Hello<h1>")
    next()
})

//Get Method
app.get('/get', (req, res) => {
    res.send('GET request to the homepage')
  })
  
  // POST method route
app.post('/post', (req, res) => {
    console.log("Post ")
    res.send('POST request to the homepage')
  })

//Setting status code to 404
app.use('', (req, res) => {
    res.status(404).sendFile(path.join(__dirname,'public','views','404.html'))
  })

app.listen(port, () => {
    console.log("Running on port ",+ port)
});
