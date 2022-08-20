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
                type: Sequalize.STRING
            },
            price: {
                type: Sequalize.FLOAT
            }
        },
    );
    return Service;
};