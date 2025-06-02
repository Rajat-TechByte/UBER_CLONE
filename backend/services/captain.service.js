const captainModel = require('../models/captain.model.js');

module.exports.createCaptain = async ({
    fullname, email, password, vehicle
}) => {
    if ( !fullname || !fullname.firstname 
        || !email || !password 
        || !vehicle || !vehicle.color || !vehicle.plate || !vehicle.capacity || !vehicle.vehicleType) {
        throw new Error('All fields are required');
    }

    const captain = captainModel.create({
        fullname,
        email,
        password,
        vehicle,
    })

    return captain;
}