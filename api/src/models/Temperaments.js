const { DataTypes } = require('sequelize')
module.exports = (sequelize) => {
  sequelize.define('temperaments', {
    Name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  })
}
