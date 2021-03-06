module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    }, 
    name: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    category:{
        type: DataTypes.BIGINT,
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
    createdOn:{
        type: DataTypes.DATE, 
        defaultValue: DataTypes.NOW
    },
    modifiedOn:{
        type: DataTypes.DATE, 
        defaultValue: DataTypes.NOW
    }  
  }, {});
  // Product.associate = function(models) {
  //   // associations can be defined here
  //   // Product.belongsTo(models.Category) //TODO : check this association
  // };
  return Product;
};