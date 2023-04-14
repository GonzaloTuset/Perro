const { DataTypes } = require('sequelize')
module.exports = (sequelize) => {
  const Temperament = sequelize.define('temperaments', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  })
  return Temperament
}
