require('dotenv').config()

const axios = require('axios')
const {
  API, KEY
} = process.env
const { Dog, Temperaments } = require('../db')

const getDogs = async (id) => {
  const dogsFromDB = await Dog.findbyPk(id, {
    include: {
      model: Temperaments,
      attributes: ['name'],
      through: { attributes: [] }
    }
  })
  return await axios.get(`${API}?api_key=${KEY}`)
    .then(response => {
      const breed = response.data.map(raza => ({ raza: raza.name }))
      if (breed.length === 0) {
        throw new Error('Sin valores')
      }
      return breed
    })
}
module.exports = getDogs
