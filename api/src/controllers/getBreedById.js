require('dotenv').config()
const axios = require('axios')
const { API, KEY } = process.env

const getBreedById = async (id) => {
  return await axios.get(`${API}/${id}?api_key=${KEY}`)
    .then(response => response.data)
}
module.exports = getBreedById
