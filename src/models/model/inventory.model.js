module.exports = (sequalize, Sequalize) => {
    const Inventory = sequalize.define(
        'inventory',
        {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequalize.INTEGER
            },
            quantity: {
                type: Sequalize.INTEGER
            },
        },
    );
    return Inventory;
};