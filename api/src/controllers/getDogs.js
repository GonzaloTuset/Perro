require('dotenv').config()
const { Dog, Temperaments } = require('../db')
const axios = require('axios')
const {
  API, KEY
} = process.env


const getDogs = async () => {
  const dbDogs = await Dog.findAll({
    include: {
      model: Temperaments,
      attributes: ['name'],
      through: { attributes: [] }
    }
  });
  const newDogsdb = dbDogs.map(dg => ({
    id: dg.id,
    name: dg.name,
    image: dg.image,
    weight: dg.weight,
    height: dg.height,
    life_span: dg.life_span,
    temperaments: dg.temperaments.map(t => t.name).join(', ')
  }));
  const apiDog = await axios.get(`${API}?api_key=${KEY}`)
    .then(response => {
      const breeds = response.data.map(({id,image,name,temperament,weight}) => ({ 
        id,
        image:image.url, 
        name, 
        temperament, 
        weight:weight.imperial 
      }))
      if (breeds.length === 0) {
        throw new Error('Sin valores');
      }
      return breeds
    })
 const dogs= newDogsdb.concat(apiDog)
 return dogs
}
module.exports = getDogs
