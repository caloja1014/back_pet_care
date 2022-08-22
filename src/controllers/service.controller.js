const db = require('../models');
const Service = db.service;
const Op = db.Sequelize.Op;

exports.create = async (req, res) => {
    if (!req.body.localId || !req.body.name) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
    const service = {
        ...req.body
    };
    service.localId=Number(service.localId);
    service.price=Number(service.price);

    try {
        console.log(service);
        const data = await Service.create(service);
        res.send(data);
    } catch (err) {
        res.status(500).send({
            message:
                err.message || "Some error occurred while creating the Service."
        });
    }


};