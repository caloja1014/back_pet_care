module.exports = (sequalize, Sequalize) => {
    const PetOwner = sequalize.define(
        'petowner',
        {
            identification: {
                type: Sequalize.STRING,
                allowNull: false,
                primaryKey: true,
            },
            name: {
                type: Sequalize.STRING
            },
            lastName: {
                type: Sequalize.STRING
            }
        },
        {
            timestamps: false,
            createdAt: false,
            updatedAt: false,
        }
    );
    return PetOwner;
};