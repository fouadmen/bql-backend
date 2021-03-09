module.exports = (sequelize,DataTypes) => {
    const Category = sequelize.define('category', { 
      id : {
        type : DataTypes.STRING(26),
        unique: true,
        allowNull: false,
        primaryKey: true
      },
      name: {
          type: DataTypes.STRING(50),
          allowNull: false,
          unique: true
      },
      description:{
          type: DataTypes.STRING(255)
      },
      imageUri :{
          type: DataTypes.STRING(255)
      }
    }, {});
    Category.associate = function(models) {
      Category.hasMany(models.product);
    };
    return Category;
  };