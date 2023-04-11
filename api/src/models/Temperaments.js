const { DataTypes } = require('sequelize')
module.exports = (sequelize) => {
  sequelize.define('temp', {
    Name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  })
}
