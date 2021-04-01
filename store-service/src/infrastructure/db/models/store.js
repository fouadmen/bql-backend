module.exports = (sequelize,DataTypes) => {
  const Store = sequelize.define('store', { 
    id : {
      type : DataTypes.STRING(26),
      unique: true,
      allowNull: false,
      primaryKey: true
    },
    storeName:{
      type : DataTypes.STRING(26),
      allowNull: false,
    },
    address:{
      type : DataTypes.STRING(255),
    },
    openingHours:{
      type : DataTypes.STRING(255),
    },
    description:{
      type : DataTypes.STRING(255),
    },
    ownerId : {
      type : DataTypes.STRING(255),
      allowNull: false,
    }
  }, {});
  Store.associate = function(models) {
    Store.hasMany(models.stock);
  };
  return Store;
};
