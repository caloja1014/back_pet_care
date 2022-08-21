const db = require("../models");
const Pet = db.pet;
const Op = db.Sequelize.Op;

// CREATE AND SAVE A PET
exports.create = (req, res) => {
    if(!req.body.petownerIdentification || !req.body.name) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    const pet = {
        breed: req.body.breed,
        name: req.body.name,
        age: req.body.age,
        petownerIdentification: req.body.petownerIdentification
    }
    Pet.create(pet)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while creating the Pet."
        })
    })
};

// GET ALL PETS BY PET_OWNER ID
exports.findAll = (req, res) => {
    const petownerIdentification = req.params.petownerIdentification;
    var condition = petownerIdentification ? { petownerIdentification: { [Op.like]: `%${petownerIdentification}%` } } : null;
    Pet.findAll({
        where: condition
    })
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: "Some error occurred while retrieving Pets."
        });
    })
};