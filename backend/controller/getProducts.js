const productModel = require("../modal/schema")

const viewProduct = (req, res) => {
    productModel.find()
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err)
            res.send(err)
        })
}
module.exports = viewProduct