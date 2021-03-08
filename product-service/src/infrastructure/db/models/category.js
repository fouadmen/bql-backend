module.exports = (sequelize,DataTypes) => {
    const Category = sequelize.define('category', { 
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
      },
      id : {
        type : DataTypes.STRING(26),
        unique: true,
        allowNull: false,
        primaryKey: true
      }
    }, {});
    Category.associate = function(models) {
      // associations can be defined here
      Category.hasMany(models.product);
    };
    return Category;
  };