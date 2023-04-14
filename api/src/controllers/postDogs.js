const { Sequelize } = require('sequelize')
const { Dog, Temperaments } = require('../db')
const postDogs = async (name, height, weight, image, years, temperaments) => {
  try {
    const newDog = await Dog.create({ name, height, image, weight, years })
    const temp = await Temperaments.findAll({
      where: {
        name:
       { [Sequelize.Op.in]: temperaments }
      }
    })
    await newDog.addTemperaments(temp)
    return newDog
  } catch (error) {
    throw new Error(error)
  }
}

module.exports = postDogs
