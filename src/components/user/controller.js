const statusCode = require('../../network/status-code')
const Response = require('../../network/response')
const store = require('./service')

class Controller {
    static async createUser (req, res) {
        try {
            const user = await store.createUser(req?.body)
            return Response.success(res, statusCode?.CREATED, user, 'User created successfully')
        } catch (error) {
            return Response.error(res, statusCode?.SERVER_ERROR, error?.message)
        }
    }

    static async getAllUsers (req, res) {
        try {
            const users = await store.getAllUsers()
            return Response.success(res, statusCode?.OK, users, 'Users list')
        } catch (error) {
            return Response.error(res, statusCode?.SERVER_ERROR, error?.message)
        }
    }

    static async updateUser (req, res) {
        try {
            if (!req?.params?.id || !req?.body?.name)
                return Response.error(res, statusCode?.BAD_REQUEST, 'User id and name are required')
            const user = await store.updateUser(req?.params?.id, req?.body?.name)
            return Response.success(res, statusCode?.OK, user, 'User updated successfully')
        } catch (error) {
            return Response.error(res, statusCode?.SERVER_ERROR, error?.message)
        }
    }

    static async deleteUser (req, res) {
        try {
            if (!req?.params?.id)
                return Response.error(res, statusCode?.BAD_REQUEST, 'User id is required')
            await store.deleteUser(req?.params?.id)
            return Response.success(res, statusCode?.NO_CONTENT)
        } catch (error) {
            return Response.error(res, statusCode?.SERVER_ERROR, error?.message)
        }
    }
}

module.exports = Controller
