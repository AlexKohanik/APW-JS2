const mongoose = require('mongoose');
//importing our scenariosSchema

//connecting to DB
mongoose.connect('mongodb://127.0.0.1:27017/apwDB');

//creating schema
var gameStateSchema = new mongoose.Schema({
        userID : String,    // query populates the userID field in gameStateSchema
        choices : {             // query populate upon choice the Level field in the gameStateSchema
            Level1: String, 
            Level2: String, 
            Level3: String, 
            Level4: String, 
            Level5: String,
            Level6: String,
            Level7: String,
            Level8: String,
            Level9: String,
            Level10: String
        }
});

//collection creation, assigning to variable
const gameState = mongoose.model("gameState", gameStateSchema);

//exporting collection and schema for documents in collection to be used in other files
module.exports = gameState;
