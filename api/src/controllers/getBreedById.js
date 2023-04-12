require('dotenv').config()
const axios = require('axios')
const { API, KEY } = process.env

const getBreedById = async (id) => {
  return await axios.get(`${API}/${id}?api_key=${KEY}`)
    .then(response => {
      const data = response.data

      if (data.length === 0) {
        throw new Error(`no existe Raza con ${id}`)
      }
      return data
    })
}
module.exports = getBreedById
