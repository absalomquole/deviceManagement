var Device = require('../models/device'); // get the mongoose model
var mongoose = require('mongoose');
var config = require('../config/database');

// Get a list of all registered leaders (GET http://localhost:3000/api/getLeaderBoard)
exports.getDeviceData = function(req, res, next) {
    Device.find({}, function(err, device) {
        if (err) throw err;
        if (!device) {
            return res.status(403).send({
                success: false,
                msg: 'Authentication failed. section not found.'
            });
        } else {
            var tableMap = {};
            deviceMap = device;

            res.json({
                success: true,
                msg: 'List of devices for device lab',
                device: deviceMap
            });
        }
    });
};

//Add a new Leader(POST http://localhost:3000/api/addLeader)
// exports.requestDevice = function(req, res, next) {
//     // if (!req.body.requesterInfo) {
//     //     res.json({
//     //         success: false,
//     //         msg: 'Please pass email,name and organization.'
//     //     });
//     // } else {
//     var newDevice = new Device({

//     });
//     // save the user
//     newDevice.save(function(err) {
//         if (err) {
//             return res.json({
//                 success: false,
//                 msg: 'Device already exists.'
//             });
//         }
//         res.json({
//             success: true,
//             msg: 'Successfully created Device.'
//         });
//     });
//     //}
// };
// // Add guessed rating to a particular leader (POST http://localhost:3000/api/leaderRating)
// exports.leaderRating = function(req, res, next) {
//     var query = {
//         email: req.body.leaderInfo.email
//     };
//     var update = {
//         guessedRating: req.body.leaderInfo.guessedRating
//     };
//     var options = {
//         new: true,
//         upsert: true
//     };
//     Leader.findOneAndUpdate(query, update, options, function(err, leader) {
//         if (err) {
//             throw err;
//             console.log("leader not found");
//         }
//         if (!leader) {
//             return res.status(403).send({
//                 success: false,
//                 msg: 'Authentication failed. leader not found.'
//             });
//         } else {
//             var leaderMap = {};
//             leader = leader;
//             res.json({
//                 success: true,
//                 msg: 'Leader has been updated',
//                 updatedLeader: leader
//             });
//         }
//     });
// };
// // Add final result to a particular leader (POST http://localhost:3000/api/leaderResult)
exports.requestDevice = function(req, res, next) {
    var query = {
        "deviceData.deviceId": "device_id_1"

    };
    var update = {
        status: "taken",
        dateAssigned: "11/11/11",
        employeeData: {
            employeeName: "Shubham",
            employeeId: "123",
            employeeEmail: "shupramanick@deloitte.com",
            employeeTeam: "JA!JA!JA"
        }
    };
    var options = {
        new: true,
        upsert: true
    };
    Device.findOneAndUpdate(query, update, options, function(err, device) {
        if (err) {
            console.log("device not found");
            throw err;
        }
        if (!device) {
            return res.status(403).send({
                success: false,
                msg: 'Authentication failed. device not found.'
            });
        } else {
            var deviceMap = {};
            device = device;
            res.json({
                success: true,
                msg: 'Device has been updated',
                updatedDevice: device
            });
        }
    });
};