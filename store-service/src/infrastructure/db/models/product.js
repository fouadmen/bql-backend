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
    unit : {
      type: DataTypes.STRING(10),
      unique: false
    },
    imageUri : {
      type: DataTypes.STRING,
      unique: false
    }
  }, {});
  Product.associate = function(models) {
    Product.hasMany(models.stock);
    Product.belongsTo(models.category); 
  };
  return Product;
};