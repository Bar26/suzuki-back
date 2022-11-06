const express = require('express')
// const {addReview, getReviews, deleteReview} = require('./review.controller')
const { addClient, getByPhone, update } = require('./client.controller')
const router = express.Router()


// router.get('/', getClient)
router.post('/', addClient)
router.get('/:phone', getByPhone)
router.put('/', update)
// router.delete('/:id',deleteClient)

module.exports = router