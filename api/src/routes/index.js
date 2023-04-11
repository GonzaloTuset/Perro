const { Router } = require('express')
const getDogs = require('../controllers/getDogs')
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

module.exports = router
