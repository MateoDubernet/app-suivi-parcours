const express = require('express')
const { getAllUser, addUser, connectUser, getUserByEmail, updateUser, deleteUser} = require('../controller/user')
const auth = require('../middleware/auth')
const userRouter = express.Router()

userRouter.get('/users', auth, getAllUser)
userRouter.get('/:Email', getUserByEmail)
userRouter.post('/', addUser)
userRouter.post('/connect', connectUser)
userRouter.put('/update', auth, updateUser)
userRouter.delete('/delete', auth, deleteUser)

module.exports = userRouter
