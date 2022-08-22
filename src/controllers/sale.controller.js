const db = require('../models');
const Sale = db.sale;
const Op = db.Sequelize.Op;

exports.create = async (req, res) => {
    if (!req.body.petId || !req.body.serviceId|| !req.body.value) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
    const sale = {
        ...req.body
    };
    sale.petId = Number(sale.petId);
    sale.serviceId = Number(sale.serviceId);
    sale.value = Number(req.body.value);
    console.log(sale);
    try {
        const data = await Sale.create(sale);
        res.send(data);
    } catch (err) {
        res.status(500).send({
            message:
                err.message || "Some error occurred while creating the Sale."
        });
    }


};