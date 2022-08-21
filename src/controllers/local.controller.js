const db = require('../models');
const Local = db.local;
const Op = db.Sequelize.Op;

exports.create = async (req, res) => {
    if (!req.body.id || !req.body.name || !req.body.latitude || !req.body.longitude || !req.body.description || !req.body.isVeterinary || !req.body.smallDescription) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
    const local = {
        ...req.body
    };
    try {
        const data = await Local.create(local);
        res.send(data);
    } catch (err) {
        res.status(500).send({
            message:
                err.message || "Some error occurred while creating the Local."
        });
    }


};