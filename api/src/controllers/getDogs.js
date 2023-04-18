require('dotenv').config()

const axios = require('axios')
const {
  API, KEY
} = process.env


const getDogs = async () => {

  return await axios.get(`${API}?api_key=${KEY}`)
    .then(response => {
      const breeds = response.data.map(({image,name,temperament,weight}) => ({ 
        image, 
        name, 
        temperament, 
        weight 
      }))
      if (breeds.length === 0) {
        throw new Error('Sin valores')
      }
      return breeds
    })
}
module.exports = getDogs
