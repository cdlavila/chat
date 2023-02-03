const Model = require('./model')

class Service {
    static async createUser (user) {
        const createdUser = new Model(user)
        await createdUser.save()
        return createdUser
    }

    static async getAllUsers () {
        return Model.find()
    }

    static async updateUser (id, name) {
        const foundUser = await Model.findById(id)
        foundUser.name = name
        foundUser.save()
        return foundUser
    }

    static async deleteUser (id) {
        return Model.deleteOne({
            _id: id
        })
    }
}

module.exports = Service
