const express = require('express')
const {addCar, getCars, getById} = require('./car.controller')
const router = express.Router()


router.get('/', getCars)
router.post('/', addCar)
router.get('/:id', getById)

// router.delete('/:id',deleteCar)

module.exports = router