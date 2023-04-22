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
  .then(response => {
    const dog = response.data.map(({id,reference_image_id,name,temperament,weight,height})=>({
      id,
      reference:reference_image_id,
      name,
      temperaments: temperament, 
      weight:weight.imperial,
      height:height.imperial

    }))
    return dog
  })
  

  const dogs = dbDogs.concat(apiResponse)

  if (dogs.length === 0) {
    throw new Error('no se encontraron perros con ese nombre')
  }
  
  return dogs
}
module.exports = getDogsName
