module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define('Category', {
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
    }, {});
    // Category.associate = function(models) {
    //   // associations can be defined here
    
    // };
    return Category;
  };