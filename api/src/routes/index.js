const { Router } = require('express')
const getDogs = require('../controllers/getDogs')
const getBreedById = require('../controllers/getBreedById')
const getDogsName = require('../controllers/getDogsName')
const getTemperaments = require('../controllers/getTemperaments')
const postDogs = require('../controllers/postDogs')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router()

router.get('/dogs/', async (req, res) => {
  const { name } = req.query
  try {
    const data = name ? await getDogsName(name) : await getDogs()
    res.status(200).json(data)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})
router.get('/temperaments', async (req, res) => {
  try {
    const data = await getTemperaments()
    res.status(200).json(data)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

router.get('/dogs', async (req, res) => {
  try {
    const data = await getDogs()
    res.status(200).json(data)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

router.get('/dogs/:id', async (req, res) => {
  const { id } = req.params
  try {
    const data = await getBreedById(id)
    res.status(200).json(data)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})
router.post('/dogs', async (req, res) => {
  const { name, height, image, weight, years, temperaments } = req.body
  try {
    const data = await postDogs(name, height, image, weight, years, temperaments)
    res.status(200).json(data)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

module.exports = router
