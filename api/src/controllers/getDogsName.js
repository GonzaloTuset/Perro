require('dotenv').config()
const axios = require('axios')
const { API, KEY } = process.env

const getDogsName = async (name) => {
  name = name.toLowerCase()
  return await axios.get(`${API}?api_key=${KEY}`)
    .then(response => {
      const data = response.data.filter(dog => dog.name.toLowerCase().includes(name))
      if (data.lenght === 0) {
        throw new Error('no se encontraror perros con ese nombre')
      }
      return data
    })
}

module.exports = getDogsName
