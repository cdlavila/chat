const statusCode = require('../../network/status-code')
const Response = require('../../network/response')
const store = require('./service')

class Controller {
    static async createChat (req, res) {
        try {
            if (!req?.body?.users || !Array.isArray(req?.body?.users)) {
                return Response.error(res, statusCode?.SERVER_ERROR, 'Users array is required')
            }
            const chat = await store.createChat(req?.body?.users)
            return Response.success(res, statusCode?.CREATED, chat, 'Chat created successfully')
        } catch (error) {
            return Response.error(res, statusCode?.SERVER_ERROR, error?.message)
        }
    }

    static async getAllChats (req, res) {
        try {
            const chats = await store.getAllChats(req?.params?.userId)
            return Response.success(res, statusCode?.OK, chats, `Chats list from user ${req?.params?.userId}`)
        } catch (error) {
            return Response.error(res, statusCode?.SERVER_ERROR, error?.message)
        }
    }
}

module.exports = Controller
