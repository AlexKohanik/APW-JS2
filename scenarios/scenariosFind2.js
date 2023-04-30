//BAFA - Alexander Kohanik - APW: JavaScript - April 18th, 2023


//THIS DOCUMENT CONTAINS:
//    -The "findAllScene()" function which can be used to grab all scenes from DB
//      ** you can change around this function to return the entire object from mongo or just one field, right now it is set to return the prompt.
//
// *** see "scenarios.js" for layout of scenarios schema & collection

const mongoose = require('mongoose');
//importing our scenariosSchema
const scenarios = require('./scenarios');

//connecting to DB
mongoose.connect('mongodb://127.0.0.1:27017/apwDB');


async function findAllScene(){
    try{
        const allScene = await scenarios.find();
        console.log(allScene);
        return allScene;
    } catch (err){
        console.log(err.message);
    }
    
}

//exporting find all scene function to be used elsewhere
module.exports = findAllScene;
