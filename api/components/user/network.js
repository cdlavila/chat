const router = require('express').Router()
const Controller = require('../user/controller')

router.post('/', Controller.createUser)
router.get('/', Controller.getAllUsers)
router.patch('/:id', Controller.updateUser)
router.delete('/:id', Controller.deleteUser)

module.exports = router