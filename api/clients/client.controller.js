
const clientService = require('./client.service')
async function addClient(req, res) {
    try {
        const client = req.body
        await clientService.add(client)
    } catch (err) {
        console.log('Failed to add client', err)
        res.status(500).send({ err: 'Failed to add client' })
    }
}

async function getByPhone(req, res) {
    try {
        const client = await clientService.getByPhone(req.params.phone)
        res.send(client)
    } catch (err) {
        console.error('Failed to get client', err)
        res.status(500).send({ err: 'Failed to get client' })
    }
}

async function update(req, res) {
    try {
        const clientReturned = req.body
        const updatedClient = await clientService.update(clientReturned)
        res.send(updatedClient)
    } catch (err) {
        console.error('Failed to update client', err)
        res.status(500).send({ err: 'Failed to update client' })
    }
}

module.exports = {
    addClient,
    getByPhone,
    update
}