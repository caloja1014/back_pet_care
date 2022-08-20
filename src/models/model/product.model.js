module.exports = (sequalize, Sequalize) => {
    const Product = sequalize.define(
        'product',
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
            price: {
                type: Sequalize.FLOAT
            },
        },
        {
            timestamps: false,
            createdAt: false,
            updatedAt: false,
        }
    );
    return Product;
};