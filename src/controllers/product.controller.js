const db = require('../models');
const Product = db.product;
const Op = db.Sequelize.Op;

exports.create = async (req, res) => {
    if (!req.body.id || !req.body.name || !req.body.price) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
    const product = {
        ...req.body
    };
    try {
        const data = await Product.create(product);
        res.send(data);
    } catch (err) {
        res.status(500).send({
            message:
                err.message || "Some error occurred while creating the Product."
        });
    }


};