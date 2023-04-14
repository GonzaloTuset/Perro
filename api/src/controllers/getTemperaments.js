require('dotenv').config()
const axios = require('axios')
const { API, KEY } = process.env
const { Temperaments } = require('../db')

const getTemperaments = async () => {
  return await axios.get(`${API}?api_key=${KEY}`)
    .then(async (response) => {
      const temp = response.data.map(temperament => ({ name: temperament.temperament || ' ' }))
      const validTemp = temp.filter((temperament) => temperament.temp !== null && temperament.temp !== ' ')
      if (validTemp.length === 0) {
        throw new Error('Do not exist valid temperaments')
      }
      await Temperaments.bulkCreate(validTemp)
      return validTemp
    })
}
module.exports = getTemperaments
