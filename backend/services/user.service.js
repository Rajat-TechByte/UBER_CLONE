const userModel = require('../models/user.model.js');

module.exports.createUser = async({
    fullname,
    email,
    password,
    
}) => {
    if(!fullname || !fullname.firstname || !email || !password) {
        throw new Error('All fields are required');
    }

    const user = await userModel.create({
        fullname,
        email,
        password,
    });

    return user;
}