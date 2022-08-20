module.exports = (sequalize, Sequalize) => {
    const Owner = sequalize.define(
        'owner',
        {
            identification: {
                type: Sequalize.STRING,
                primaryKey: true,
                allowNull: false,
            },
            name: {
                type: Sequalize.STRING
            },
            lastName: {
                type: Sequalize.STRING
            },
            age: {
                type: Sequalize.INTEGER
            },
        },
        {
            timestamps: false,
            createdAt: false,
            updatedAt: false,
        }
    );
    return Owner;
};