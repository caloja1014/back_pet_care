module.exports = (sequalize, Sequalize) => {
    const Local = sequalize.define(
        'local',
        {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER
            },
            latitude: {
                type: Sequalize.INTEGER
            },
            longitude: {
                type: Sequalize.INTEGER
            },
            description: {
                type: Sequalize.STRING
            },
            smallDescription: {
                type: Sequalize.STRING
            }
        },
    );
    return Local;
};