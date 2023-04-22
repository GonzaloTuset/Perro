require('dotenv').config()
const axios = require('axios')
const { Dog, Temperaments } = require('../db')
const { API, KEY } = process.env

const getBreedById = async (id) => {

  let obj= {}
  let dogsApi;
  await axios.get(`${API}/${id}?api_key=${KEY}`)
    .then(response => {
      dogsApi = response.data
      
    })
    if(dogsApi){
     obj={
        id: dogsApi.id,
        name: dogsApi.name,
        image: dogsApi.image,
        height: dogsApi.height.imperial,
        weight: dogsApi.weight.imperial,
        years: dogsApi.life_span,
        temperaments: dogsApi.temperament,
        reference: dogsApi.reference_image_id
      }
    }

  if(id.length >= 4){
    const dogsFromDb = await Dog.findByPk(id, {
      include: {
        model: Temperaments,
        attributes: ['name'],
        through: { attributes: [] }
      }
    })
       obj = {
          id: dogsFromDb.id,
          name: dogsFromDb.name,
          image: dogsFromDb.image,
          height: dogsFromDb.height,
          weight: dogsFromDb.weight,
          years: dogsFromDb.years,
          temperaments: dogsFromDb.temperaments.map(temp=>temp.name)
      }
  }
  return obj
      
    
}
module.exports = getBreedById
