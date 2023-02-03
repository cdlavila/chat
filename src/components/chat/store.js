const Model = require('./model')

class Store {
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

module.exports = Store
