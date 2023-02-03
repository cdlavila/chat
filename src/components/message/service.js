const Model = require('./model')

class Service {
    static async createMessage (message) {
        const createdMessage = new Model(message)
        await createdMessage.save()
        return createdMessage
    }

    static async getAllMessages (chat) {
        const filter = !chat ? {} : { chat: chat }
        return Model.find(filter).populate('user')
    }

    static async updateMessage (id, message) {
        const foundMessage = await Model.findById(id)
        foundMessage.message = message
        foundMessage.save()
        return foundMessage
    }

    static async deleteMessage (id) {
        return Model.deleteOne({
            _id: id
        })
    }
}

module.exports = Service
