require('dotenv').config()
const axios = require('axios')
const { Dog, Temperaments } = require('../db')
const {Op} = require('sequelize')
const { API, KEY } = process.env

const getDogsName = async (name) => {
  const dbDogs = await Dog.findAll({
    where: {
      name: {
        [Op.iLike]: `%${name}%`
      }
    },
    include: {
      model: Temperaments,
      attributes: ['name'],
      through: { attributes: [] }
    }
  });

  const apiResponse = await axios.get(`${API}/search?q=${name}&api_key=${KEY}`)
  const apiDogs = apiResponse.data

  const dogs = dbDogs.concat(apiDogs)

  if (dogs.length === 0) {
    throw new Error('no se encontraron perros con ese nombre')
  }
  
  return dogs
}
module.exports = getDogsName
