'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      Product.belongsTo(models.Category) //TODO : check this association
    }
  };
  Product.init({
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    }, 
    name: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    category:{
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull:false,
                    /*
            type: DataTypes.INTEGER,
            reference: {
                model: Category,
                key: 'id',
            }
        */
    },
    description:{
        type: DataTypes.STRING(255)
    },
    barcode:{
        type: DataTypes.BIGINT.UNSIGNED,
        unique: true
    },
    price:{
        type: DataTypes.FLOAT,
        allowNull: false
    },
    purchasePrice:{
        type: DataTypes.FLOAT,
        allowNull: false
    },
    sellingPrice:{
        type: DataTypes.FLOAT,
        allowNull: false
    },
    createdOn:{
        type: DataTypes.DATE, 
        defaultValue: DataTypes.NOW
    },
    modifiedOn:{
        type: DataTypes.DATE, 
        defaultValue: DataTypes.NOW
    }
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};