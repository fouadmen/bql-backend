'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {};
  Category.init({
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
    description:{
        type: DataTypes.STRING(255)
    },
    barcode:{
        type: DataTypes.BIGINT.UNSIGNED,
        unique: true
    },
    createdOn:{
        type: DataTypes.DATE, 
        defaultValue: DataTypes.NOW
    },
    modifiedOn:{
        type: DataTypes.DATE, 
        defaultValue: DataTypes.NOW
    },
    imageUri :{
        type: DataTypes.STRING(255)
    }
}, {
    sequelize,
    modelName: 'Category',
  });
  return Category;
};