const mongoose = require('mongoose')
require('mongoose-double')(mongoose);
const Schema = mongoose.Schema
const SchemaTypes = mongoose.Schema.Types;

const Activity = new Schema(
    {
        faceid: { type: Number, required: true },
        name: { type: String, required: true },
        datetime: { type: Date, required: true },
        deviceid: { type: Number, required: true  },
        feature: { type: [SchemaTypes.Double], required: true  },
        visitcnt: { type: Number},
        stayhour: { type: Number},
        temperature: { type: Number},
        coughcnt: { type: Number},
        maskflag: { type: Boolean}
    },
    { timestamps: true },
)

module.exports = mongoose.model('soynetactivity', Activity)