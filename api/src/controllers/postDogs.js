const { Dog, Temperament } = require('../db')
const postDogs = async (name, height, weight, years, temperament) => {
  if (!name || !height || !weight || !years || !temperament) {
    throw new Error('Faltan datos o algunos son incorrectos')
  }
  const newDog = await Dog.bulkCreate({ name, height, weight, years })
  const temperamentPromise = temperament.map(temp => {
    return Temperament.findOrCreate({ where: { Name: temp } })
      .then(([temprecord, create]) => {
        return newDog.addTemperament(temprecord)
      })
      .catch(() => {
        throw new Error('error creating temperament')
      })
  })
  await Promise.all(temperamentPromise)
  console.log('mew dog created:', newDog.toJSON())
  return newDog.toJSON()
}
module.export = postDogs
