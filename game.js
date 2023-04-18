//BAFA - Alexander Kohanik - APW: JavaScript - April 18th, 2023


//const textElement = document.getElementById('text');
//const userChoiceElement = document.getElementById('userChoice');
const mongoose = require('mongoose');
const sceneFind = require('./scenarios/scenariosFind.js');
const userFind = require('./users/usersFind.js')


let state = {}

async function startGame(){
    try{
        state = {}
        sceneFind(1);
    } catch (err){
        console.log(err.message);
    }


}

function userInput(){

}


//startGame()





