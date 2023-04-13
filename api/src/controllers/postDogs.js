const { Dog, Temperaments } = require('../db')
const postDogs = async (name, height, weight, image, years, temperament) => {
  try {
    if (!name || !height || !weight || !image || !years || !temperament) {
      throw new Error('faltan datos')
    }
    const newDog = await Dog.bulkCreate({ name, height, weight, years })
    const temp = await Temperaments.findAll({ where: { Name: 'keen' } })
    const newDogWithTemp = await newDog.addTemperaments(temp)
    return newDogWithTemp
  } catch (error) {
    throw new Error(error)
  }
}
module.exports = postDogs
