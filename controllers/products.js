const products = [];

exports.addProduct= (req, res) => {
    products.push({title: req.body.title})
    console.log(products)
    res.status(200).send("Recieved")
  }


exports.getProducts = (req, res) => {
    res.status(200).json(products)
}