const db = require("../models");
const Inventory = db.inventory;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    if(!req.body.quantity || !req.body.productId || !req.body.localId) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    const inventory = {
        quantity: req.body.quantity,
        productId: req.body.productId,
        localId: req.body.localId
    }
    Inventory.create(inventory)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while creating the Inventory."
        })
    })
};

exports.findAll = (req, res) => {
    const localId = req.params.localId;
    var condition = localId ? { localId: { [Op.like]: `%${localId}%` } } : null;
    Inventory.findAll({
        where: condition
    })
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: "Some error occurred while retrieving Inventory."
        });
    })
};