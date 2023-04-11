const { Router } = require('express')
const getDogs = require('../controllers/getDogs')
const getBreedById = require('../controllers/getBreedById')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router()

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

module.exports = router
