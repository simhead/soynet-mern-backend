const express = require('express')

const SoynetActivityCtrl = require('../controllers/soynet-activity-ctrl')

const router = express.Router()

router.post('/activity', SoynetActivityCtrl.addActivity)
router.put('/activity/:id', SoynetActivityCtrl.updateActivity)
router.delete('/activity/:id', SoynetActivityCtrl.deleteActivity)
router.get('/activity/:id', SoynetActivityCtrl.getActivityById)
router.get('/activity/device/:id', SoynetActivityCtrl.getActivityByDeviceId)
router.get('/activities', SoynetActivityCtrl.getActivities)

module.exports = router