const Model = require('./model')

class Service {
    static async createChat (users) {
        const chat = {
            users: users,
        }
        const createdChat = new Model(chat)
        await createdChat.save()
        return createdChat
    }

    static async getAllChats (userId) {
        const filter = !userId? {} : { users: userId }
        return Model.find(filter).populate('users')
    }
}

module.exports = Service
