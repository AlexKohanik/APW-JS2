//BAFA - Alexander Kohanik - APW: JavaScript - April 18th, 2023


//THIS DOCUMENT CONTAINS:
//    -The "addUser()" function which can be used to add a user
//
// *** see "users.js" for layout of users schema & collection

const mongoose = require('mongoose');
//importing our usersSchema
const users = require('./users');

//connecting to DB
mongoose.connect('mongodb://127.0.0.1:27017/apwDB');

addUser();
async function addUser(){
        //adding a new scenario to the DB
        try{
        const user = await users.create({
            id: 1,
            name: "Alexander John Kohanik",
            email: "kohani15@students.rowan.edu"
        });
        console.log(user);
    } catch (err) {
        console.log(err);
    }
}

module.exports = addUser();



