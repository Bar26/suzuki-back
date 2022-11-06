const dbService = require('../../services/db.service')
const ObjectId = require('mongodb').ObjectId

async function add(car) {
    try {
        const collection = await dbService.getCollection('cars')
        await collection.insertOne(car)
    } catch (err) {
        console.error('cannot insert car', err)
        throw err
    }
}

async function getCars() {
    try {
        const collection = await dbService.getCollection('cars')
        const cars = collection.find().toArray()
        return cars
    } catch (err) {
        console.error('cannot get cars', err)
        throw err
    }
}

async function getById(carId) {
    console.log(carId);
    try {
        const collection = await dbService.getCollection('cars')
        const car = await collection.findOne({ _id: ObjectId(carId) })
        return car
    } catch (err) {
        console.error(`while finding car ${carId}`, err)
        throw err
    }
}



module.exports = {
    add,
    getCars,
    getById,
}