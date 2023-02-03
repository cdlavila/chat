const statusCode = require('../../network/status-code')
const Response = require('../../network/response')
const store = require('./service')
const socket = require('../../../socket').socket

class Controller {
    static async createMessage (req, res) {
        try {
            if (!req?.body?.chat || !req?.body?.user || !req?.body?.message) {
                return Response.error(res, statusCode?.SERVER_ERROR, 'Chat, user and message are required')
            }
            const message = await store.createMessage(req?.body)

            socket.io.emit('message', message)

            return Response.success(res, statusCode?.CREATED, message, 'Message created successfully')
        } catch (error) {
            return Response.error(res, statusCode?.SERVER_ERROR, error?.message)
        }
    }

    static async getAllMessages (req, res) {
        try {
            const messages = await store.getAllMessages(req?.query?.chat)
            return Response.success(res, statusCode?.OK, messages, 'Messages list')
        } catch (error) {
            return Response.error(res, statusCode?.SERVER_ERROR, error?.message)
        }
    }

    static async updateMessage (req, res) {
        try {
            if (!req?.params?.id || !req?.body?.message)
                return Response.error(res, statusCode?.BAD_REQUEST, 'Message id and message are required')
            const message = await store.updateMessage(req?.params?.id, req?.body?.message)
            return Response.success(res, statusCode?.OK, message, 'Message updated successfully')
        } catch (error) {
            return Response.error(res, statusCode?.SERVER_ERROR, error?.message)
        }
    }

    static async deleteMessage (req, res) {
        try {
            if (!req?.params?.id)
                return Response.error(res, statusCode?.BAD_REQUEST, 'Message id is required')
            await store.deleteMessage(req?.params?.id)
            return Response.success(res, statusCode?.NO_CONTENT)
        } catch (error) {
            return Response.error(res, statusCode?.SERVER_ERROR, error?.message)
        }
    }
}

module.exports = Controller
