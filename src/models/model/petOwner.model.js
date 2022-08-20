module.exports = (sequalize, Sequalize) => {
    const PetOwner = sequalize.define(
        'petowner',
        {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequalize.INTEGER
            },
            identification: {
                type: Sequalize.STRING
            },
            name: {
                type: Sequalize.STRING
            },
            lastName: {
                type: Sequalize.STRING
            }
        },
    );
    return PetOwner;
};