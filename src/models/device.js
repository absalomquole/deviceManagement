var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// set up a mongoose model
var DeviceSchema = new Schema({
    deviceData: {
        deviceId: Schema.Types.Mixed,
        deviceName: Schema.Types.Mixed,
        deviceModel: Schema.Types.Mixed,
        deviceType: Schema.Types.Mixed,
        OSVersion: Schema.Types.Mixed
    },
    status: Schema.Types.Mixed,
    assigneeHistory: Schema.Types.Mixed,
    dateAssigned: Schema.Types.Mixed,
    employeeData: {
        employeeName: Schema.Types.Mixed,
        employeeId: Schema.Types.Mixed,
        employeeEmail: Schema.Types.Mixed,
        employeeTeam: Schema.Types.Mixed
    }
});

DeviceSchema.pre('save', function(next) {
    // get the current date
    var currentDate = new Date();

    // change the updated_at field to current date
    this.updated_at = currentDate;

    // if created_at doesn't exist, add to that field
    if (!this.created_at)
        this.created_at = currentDate;

    next();
});
module.exports = mongoose.model('Device', DeviceSchema);