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
            description: {
                type: Sequalize.STRING
            }
        },
    );
    return Service;
};