module.exports = (sequalize, Sequalize) => {
    const Sale = sequalize.define(
        'sale',
        {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER
            },
            value: {
                type: Sequalize.INTEGER
            },
        },
    );
    return Sale;
};