module.exports = (sequalize, DataTypes) => {
    const Product = sequalize.define(
        'product',
        {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER
            },
            name: {
                type: DataTypes.STRING
            },
            price: {
                type: DataTypes.FLOAT
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


/*'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.j
     *//*
     static associate(models) {
        // define association here
      }
    };
    product.init({
      id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.INTEGER
      },
      name: DataTypes.STRING,
      price: DataTypes.FLOAT
    }, {
      sequelize,
      modelName: 'product',
    });
    return product;
  };*/