module.exports = (sequelize,DataTypes) => {
  const User = sequelize.define('user', { 
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
    phone: {
      type: DataTypes.STRING(10),
      allowNull: false,
      unique: true
    },
    address:{
      type: DataTypes.STRING(255),
    },
    email:{
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true
    },
    password:{
      type: DataTypes.STRING(20),
      allowNull: false,
    }
  }, {
    defaultScope: {
      attributes: { 
        exclude: ['password'] // TODO : This is not working (HIGH)
      }
    }
  });
  User.associate = function(models) {
    User.belongsTo(models.role);
  };
  return User;
};