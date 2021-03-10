import { STRING } from "sequelize";
import { DataTypes } from "sequelize";
module.exports = (sequelize) => {
  const Role = sequelize.define('role', { 
    id : {
      type : DataTypes.STRING(26),
      unique: true,
      allowNull: false,
      primaryKey: true
    },
    title: {
        type: DataTypes.STRING(10),
        allowNull: false,
        unique: true
    },
    permissions: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
      unique: true
    }
  }, {});
  Role.associate = function(models) {};
  return Role;
};

