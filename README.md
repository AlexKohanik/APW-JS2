# APW-JS2
APWJS - AlexK

Made a new repo.
------------------------------------------------------------------------------------
INSTALL THE FOLLOWING PACKAGES:

npm install express
npm install ejs
npm install mongoose
npm install body-parser
npm install express-session
npm install passport passport-local 
npm install passport-local-mongoose 

Run 'npm install' afterwards to confirm all are up to date.
-----------------------------------------------------------------------------------

The Scenarios Folder contains: 
-"scenarios.js" : which contains the schema for the scenarios
-"scenariosFind.js" : which contains the sceneFind() function, you can require this atop, and use this to find a scene from the DB. just pass in the scene id #
-"scenariosAdd.js" : which contains the sceneAdd() function, you can require this atop, and use this to add a scene to the DB.
-"scenariosImport.json" : some template scenarios you can import to your mongodb using the "MongoDB Compass" Interface. So you can use the functions above. The DB I reference/connect to is called "apwDB" so you may need to create that DB first.

The Users Folder contains:
-"users.js" : which contains the schema for the users
-"usersAdd.js": which contains the addUser() function, you can require this atop a file, and use this to add a user to the DB. ***Needs tweaking
-"usersFind.js": which contains the findUser() function, you can require this atop a file, and use this to find a user from the DB. just pass in the username as a function arg
-"usersImport.json": same as scenariosImport but import for users.

-game.js is about to commence and I will create the framework for the game itself. probably adding other functions/schemas/collections/documents along the way.
