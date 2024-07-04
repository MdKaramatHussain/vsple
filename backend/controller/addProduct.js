const productModel = require("../modal/schema")

const addProduct = (req, res) => {
    console.log(req.body)
    productModel.create({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price
    })
        .then((result) => {
            console.log(result)
            res.send(result)
        })
        .catch((err) => {
            console.log(err)
        })
}

module.exports = addProduct