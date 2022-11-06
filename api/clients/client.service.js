const dbService = require('../../services/db.service')
const ObjectId = require('mongodb').ObjectId


async function add(client) {
    try {
        if(client){

        }
        const collection = await dbService.getCollection('client')
        await collection.insertOne(client)
    } catch (err) {
        console.error('cannot insert client', err)
        throw err
    }
}

async function getByPhone(phone) {
    try {
        const collection = await dbService.getCollection('client')
        const client = await collection.findOne({ phone })
        return client
    } catch (err) {
        logger.error(`while finding client ${phone}`, err)
        throw err
    }
}

async function update(client) {
    try {
        // peek only updatable properties
        const clientToUpdate = {...client, _id: ObjectId(client._id)}
        const collection = await dbService.getCollection('client')
        await collection.updateOne({ _id: clientToUpdate._id }, { $set: clientToUpdate })
        return clientToUpdate
    } catch (err) {
        console.error(`cannot update client ${client._id}`, err)
        throw err
    }
}

module.exports={
    add,
    getByPhone,
    update

}