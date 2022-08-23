const db = require("../models");
const PetOwner = db.petOwner;
const Op = db.Sequelize.Op;

// CREATE AND SAVE A PET OWNER
exports.create = (req, res) => {
    if(!req.body.identification || !req.body.name || !req.body.lastName) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    const petOwner = {
        identification: req.body.identification,
        name: req.body.name,
        lastName: req.body.lastName
    }
    PetOwner.create(petOwner)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while creating the PetOwner."
        })
    })
};

// GET ALL PET OWNERS
exports.findAll = (req, res) => {
    PetOwner.findAll({
        
    })
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: "Some error occurred while retrieving PetOwners."
        });
    })
};

// UPDATE A PET OWNER BY ID
exports.update = (req, res) => {
    const identification = req.params.identification;
    PetOwner.update(req.body, {
        where: {identification: identification}
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "PetOwner was updated successfully"
            });
        } else {
            res.send({
                message: "Cannot update PetOwner with id=${identification}. Maybe PetOwner was not found or req.body is empty"
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error updating PetOwner with id=" + identification
        });
    })
};