module.exports = (sequalize, Sequalize) => {
    const Pet = sequalize.define(
        'pet',
        {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER
            },
            breed: {
                type: Sequalize.STRING
            },
            name: {
                type: Sequalize.STRING
            },
            age: {
                type: Sequalize.INTEGER
            },
        },
    );
    return Pet;
};