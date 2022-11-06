
const carService = require('./car.service')

async function addCar(req, res) {
    try {
        const car = req.body
        await carService.add(car)
    } catch (err) {
        console.log('Failed to add car', err)
        res.status(500).send({ err: 'Failed to add car' })
    }
}

async function getCars(req, res) {
    try {
        const cars = await carService.getCars()
        res.send(cars)
    } catch (err) {
        console.error('Cannot get cars', err)
        res.status(500).send({ err: 'Failed to get cars' })
    }
}
async function getById(req, res) {
    try {
        const car = await carService.getById(req.params.id)
        console.log(req.params);
        res.send(car)
    } catch (err) {
        console.error('Failed to get car', err)
        res.status(500).send({ err: 'Failed to get car' })
    }
}


module.exports = {
    addCar,
    getCars,
    getById
}