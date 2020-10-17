const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Activity = new Schema(
    {
        faceid: { type: Number, required: true },
        name: { type: String, required: true },
        datetime: { type: Date, required: true },
        visitcnt: { type: Number},
        stayhour: { type: Number},
        temperature: { type: Number},
        coughcnt: { type: Number},
        maskflag: { type: Boolean}
    },
    { timestamps: true },
)

module.exports = mongoose.model('soynetactivity', Activity)