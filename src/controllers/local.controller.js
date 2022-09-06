const db = require('../models');
const Local = db.local;
const Op = db.Sequelize.Op;

exports.create = async (req, res) => {
    console.log(req.body);
    if (!req.body.name || !req.body.latitude || !req.body.longitude || !req.body.description || !req.body.isVeterinary || !req.body.smallDescription || !req.body.ownerIdentification) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    const local = {
        name: req.body.name,
        latitude: req.body.latitude,
        longitude: req.body.longitude,
        description: req.body.description,
        isVeterinary: req.body.isVeterinary,
        smallDescription: req.body.smallDescription,
        ownerIdentification: req.body.ownerIdentification,
    };

    Local.create(local)
        .then(data => {
            
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Local."
            })
        })


};
exports.get = (req, res) => {
    const id = req.params.id;
    Local.findByPk(id).then(data => {
        
        res.send(data);
    }
    ).catch(err => {
        res.status(500).send({
            message: "Error retrieving Local with id=" + id
        });
    }
    );
}

exports.getAll = (req, res) => {
    Local.findAll().then(data => {
        console.log(data);
        res.send(data);
    }
    ).catch(err => {
        res.status(500).send({
            message: "Error retrieving Local"
        });
    }
    );
}
exports.update = (req, res) => {
    const id = req.params.id;
    Local.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Local was updated successfully"
                });
            } else {
                res.send({
                    message: "Cannot update Local with id=${id}. Maybe Local was not found or req.body is empty"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Local with id=" + id
            });
        })
};