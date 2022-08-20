module.exports = (sequalize, Sequalize) => {
    const Local = sequalize.define(
        'local',
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
            latitude: {
                type: Sequalize.INTEGER
            },
            longitude: {
                type: Sequalize.INTEGER
            },
            description: {
                type: Sequalize.TEXT('long')
            },
            isVeterinary: {
                type: Sequalize.BOOLEAN
            },
            smallDescription: {
                type: Sequalize.STRING
            }
        },
        {
            timestamps: false,
            createdAt: false,
            updatedAt: false,
        }
    );
    return Local;
};