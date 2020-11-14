const express = require('express')

const SoynetDeviceCtrl = require('../controllers/soynet-device-ctrl')

const router = express.Router()

router.post('/device', SoynetDeviceCtrl.createDevice)
router.put('/device/:id', SoynetDeviceCtrl.updateDevice)
router.delete('/device/:id', SoynetDeviceCtrl.deleteDevice)
router.get('/device/:id', SoynetDeviceCtrl.getDeviceById)
router.get('/devices', SoynetDeviceCtrl.getDevices)

module.exports = router