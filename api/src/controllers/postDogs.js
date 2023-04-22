const { Sequelize } = require('sequelize')
const { Dog, Temperaments } = require('../db')
const postDogs = async (name, height, image, weight, years, temperament) => {
  try {
    if (!name || !height || !weight || !image || !years || !temperament) {
      throw new Error('faltan datos')
    }
    if (!temperament.length) {
      temperament = ['desconocido'];
    }
    const newDog = await Dog.create({ name, height, image, weight, years })
    const temp = await Temperaments.findAll({
      where: {
        name:
       { [Sequelize.Op.in]: temperament }
      }
    })
    await newDog.setTemperaments(temp)

    return newDog
  } catch (error) {
    throw new Error(error)
  }
}

module.exports = postDogs
 