module.exports = (sequelize,DataTypes) => {
  const Stock = sequelize.define('stock', { 
    id : {
      type : DataTypes.STRING(26),
      unique: true,
      allowNull: false,
      primaryKey: true
    },
    quantity:{
      type : DataTypes.FLOAT,
      allowNull: false,
    },
    minLimit:{
      type : DataTypes.FLOAT,
      allowNull: false,
    },
    buyingPrice:{
      type : DataTypes.FLOAT,
      allowNull: false,
    },
    sellingPrice:{
      type : DataTypes.FLOAT,
      allowNull: false,
    }
  }, {});
  Stock.associate = function(models) {
    // associations can be defined here
    Stock.hasMany(models.product);
  };
  return Stock;
};