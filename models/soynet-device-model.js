const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Device = new Schema(
    {
        deviceName: { type: String, required: true },
        deviceId: { type: Number, required: true },
        location1: { type: String},
        location2: { type: String},
        status: { type: String},
        createdatetime: { type: Date, required: true },
        updatedatetime: { type: Date, required: true }
    },
    { timestamps: true },
)

module.exports = mongoose.model('soynetdevice', Device)