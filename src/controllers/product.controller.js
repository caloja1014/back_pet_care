const db = require('../models');
const Product = db.product;
const Op = db.Sequelize.Op;

exports.create = async (req, res) => {
    if (!req.body.id || !req.body.name || !req.body.price) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    const product = {
        id: req.body.id,
        name: req.body.name,
        price: req.body.price,
    };

    Product.create(product)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while creating the Product."
        })
    })

    /*try {
        const data = await Product.create(product);
        res.send(data);
    } catch (err) {
        res.status(500).send({
            message:
                err.message || "Some error occurred while creating the Product."
        });
    }*/


};

exports.update = (req, res) => {
    const id = req.params.id;
    Product.update(req.body, {
        where: {id: id}
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "Product was updated successfully"
            });
        } else {
            res.send({
                message: "Cannot update Product with id=${id}. Maybe Product was not found or req.body is empty"
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error updating Product with id=" + id
        });
    })
};