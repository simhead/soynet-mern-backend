const express = require('express')

const SoynetUserCtrl = require('../controllers/soynet-user-ctrl')

const router = express.Router()

router.post('/user', SoynetUserCtrl.createUser)
router.put('/user/:id', SoynetUserCtrl.updateUser)
router.delete('/user/:id', SoynetUserCtrl.deleteUser)
router.get('/user/:id', SoynetUserCtrl.getUserById)
router.get('/users', SoynetUserCtrl.getUsers)

module.exports = router