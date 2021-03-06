const express = require('express')
const router = express.Router()
const {
  findAll,
  findById,
  search,
  create,
  update,
  deleteById,
} = require('../controllers/controller.todo')

router.get('/', findAll)
router.get('/search', search)
router.get('/:id', findById)
router.post('/', create)
router.put('/:id', update)
router.delete('/:id', deleteById)

module.exports = router
