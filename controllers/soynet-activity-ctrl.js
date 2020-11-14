const Activity = require('../models/soynet-activity-model')

addActivity = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide activity details',
        })
    }

    const activity = new Activity(body)

    if (!activity) {
        return res.status(400).json({ success: false, error: err })
    }

    activity
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: activity._id,
                message: 'Added Activity!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Activity not added!',
            })
        })
}

updateActivity = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Activity.findOne({ faceid: req.params.id }, (err, activity) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Activity not found!',
            })
        }

        activity.faceid = body.faceid
        activity.name = body.name
        activity.datetime = body.datetime
        activity.visitcnt = body.visitcnt
        activity.stayhour = body.stayhour
        activity.temperature = body.temperature
        activity.coughcnt = body.coughcnt
        activity.maskflag = body.maskflag
        activity
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: activity._id,
                    message: 'Activity updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Activity not updated!',
                })
            })
    })
}

deleteActivity = async (req, res) => {
    await Activity.findOneAndDelete({ faceid: req.params.id }, (err, activity) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!activity) {
            return res
                .status(404)
                .json({ success: false, error: `Activity not found` })
        }

        return res.status(200).json({ success: true, data: activity })
    }).catch(err => console.log(err))
}

getActivityById = async (req, res) => {
    await Activity.find({ faceid: req.params.id }, (err, activity) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!activity) {
            return res
                .status(404)
                .json({ success: false, error: `Activity not found` })
        }
        return res.status(200).json({ success: true, data: activity })
    }).catch(err => console.log(err))
}

getActivityByDeviceId = async (req, res) => {
    await Activity.find({ deviceid: req.params.id }, (err, activity) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!activity) {
            return res
                .status(404)
                .json({ success: false, error: `Activity not found` })
        }
        return res.status(200).json({ success: true, data: activity })
    }).catch(err => console.log(err))
}

getActivities = async (req, res) => {
    await Activity.find({}, (err, activities) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!activities.length) {
            return res
                .status(404)
                .json({ success: false, error: `Activity not found` })
        }
        return res.status(200).json({ success: true, data: activities })
    }).catch(err => console.log(err))
}

module.exports = {
    addActivity,
    updateActivity,
    deleteActivity,
    getActivities,
    getActivityById,
    getActivityByDeviceId,
}