module.exports = (sequalize, Sequalize) => {
    const Sale = sequalize.define(
        'sale',
        {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequalize.INTEGER
            },
            value: {
                type: Sequalize.INTEGER
            },
        },
        {
            timestamps: false,
            createdAt: false,
            updatedAt: false,
        }
    );
    return Sale;
};