module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('product', {
    id: {
      type: DataTypes.STRING(26),
      allowNull: false,
      primaryKey: true
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
    price:{
        type: DataTypes.FLOAT,
        allowNull: false
    }
  }, {});
  Product.associate = function(models) {
     //TODO : check this association
    Product.belongsTo(models.category)
  };
  return Product;
};