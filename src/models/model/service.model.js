module.exports = (sequalize, Sequalize) => {
    const Service = sequalize.define(
        'service',
        {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER
            },
            description: {
                type: Sequalize.STRING
            }
        },
    );
    return Service;
};