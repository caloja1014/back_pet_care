const db = require('../models');
const Service = db.service;
const Op = db.Sequelize.Op;

exports.create = async (req, res) => {
    if (!req.body.ownerId || !req.body.lastName || !req.body.name || !req.body.age) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
    const owner = {
        ...req.body
    };
    try {
        const data = await Owner.create(owner);
        res.send(data);
    } catch (err) {
        res.status(500).send({
            message:
                err.message || "Some error occurred while creating the Owner."
        });
    }


};