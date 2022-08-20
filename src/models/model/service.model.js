
module.exports = (sequalize, Sequalize) => {
    const Service = sequalize.define(
        'service',
        {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequalize.INTEGER
            },
            name: {
                type: Sequalize.STRING
            },
            description: {
                type: Sequalize.TEXT('long')
            },
            price: {
                type: Sequalize.FLOAT
            }
        },
        {
            timestamps: false,
            createdAt: false,
            updatedAt: false,
        }
    );
    return Service;
};