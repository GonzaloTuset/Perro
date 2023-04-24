require('dotenv').config()
const axios = require('axios')
const { API, KEY } = process.env
const { Temperaments } = require('../db')

const getTemperaments = async () => {
  const temps = await Temperaments.findAll()
  if(temps[0] !== undefined){
    return temps
  }

  return await axios.get(`${API}?api_key=${KEY}`)
    .then(async (response) => {
      const temp = response.data.flatMap(temperament => {
        if (!temperament.temperament) {
          return { name: 'no ones here' }
        }
        return temperament.temperament.split(',').map(temp => ({ name: temp.trim() }))
      })
      const oneTemp = [
        ...new Set(temp.map(temp => temp.name))
      ]
      const validTemp = oneTemp.filter(temperament => temperament !== 'no ones here')
        .map(temperament => ({ name: temperament }))
      if (validTemp.length === 0) {
        throw new Error("no existe temperamentos valido")
      }
      await Temperaments.bulkCreate(validTemp)
      return validTemp
    })
}
module.exports = getTemperaments
