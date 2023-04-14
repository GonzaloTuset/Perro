require('dotenv').config()
const axios = require('axios')
const { Dog, Temperaments } = require('../db')
const { API, KEY } = process.env

const getBreedById = async (id) => {
  const dogsFromDb = await Dog.findByPk(id, {
    include: {
      model: Temperaments,
      attributes: ['name'],
      through: { attributes: [] }
    }
  })
  
  let dogsApi;
  await axios.get(`${API}/${id}?api_key=${KEY}`)
    .then(response => {
      dogsApi = response.data
    })
    if(dogsFromDb && dogsApi){
      const dogsDb = {
        id:dogsFromDb.id,
        name: dogsFromDb.name,
        image: dogsFromDb.image,
        height: dogsFromDb.height,
        weight: dogsFromDb.weight,
        years: dogsFromDb.years,
        temperaments:dogsFromDb.temperaments.map(temp=>temp.name)

      }
      return{dogsApi, dogsDb}
    }
    else if(!dogsApi){
      const dogsDbOnly = {
        id:dogsFromDb.id,
        name: dogsFromDb.name,
        image: dogsFromDb.image,
        height: dogsFromDb.height,
        weight: dogsFromDb.weight,
        years: dogsFromDb.years,
        temperaments:dogsFromDb.temperaments.map(temp=>temp.name)
      }
      return dogsDbOnly
    }
    else if(!dogsFromDb){
      return dogsApi
    }
      if (data.length === 0) {
        throw new Error(`no existe Raza con ${id}`)
      }
      
    
}
module.exports = getBreedById
