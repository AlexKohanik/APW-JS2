var express = require("express"),
    mongoose = require("mongoose"),
    passport = require("passport"),
    bodyParser = require("body-parser"),
    LocalStrategy = require("passport-local"),
    passportLocalMongoose = 
        require("passport-local-mongoose") 

//functions - AlexK
//findPromptOpt2ById() pass in id as param, will return that scenes second option for user
//findPromptOptById() pass in id as param, will return that scenes first option for the user
//findUser() pass in a users id as param, will return that users username
//findScene() pass in a scenes id as param, will return that scenes prompt aka the text displayed to the user.
const findPromptOpt2ById = require("./alexK_repo/scenarios/scenariosOpt2");
const findPromptOptById = require("./alexK_repo/scenarios/scenariosOpt");
const findUser = require("./alexK_repo/users/usersFind");
const findScene = require("./alexK_repo/scenarios/scenariosFind");

const ejs = require("ejs");
const User = require("./model/User");
var app = express();

var path = require('path');
//app.use(express.static(path.join(__dirname, 'public'))); //trying to apply the styles.css 

  
mongoose.connect("mongodb://127.0.0.1:27017/apwDB");
  
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(require("express-session")({
    secret: "n/a",
    resave: false,
    saveUninitialized: false
}));
  
app.use(passport.initialize());
app.use(passport.session());
  
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
  
//=====================
// ROUTES
//=====================
  
// Showing home page
app.get("/", function (req, res) {
    res.render("home");
});

// Showing home page
app.get("/index", function (req, res) {
  res.render("index");
});
  
// Showing register form
app.get("/register", function (req, res) {
    res.render("register");
});

// Showing leaderboard page
app.get("/leaderboard", function (req, res) {
  res.render("leaderboard");
});

// Showing game page       //Alex K changes comments in this section April 20th, 2023
app.get("/game", async function (req, res) {
    const data = {
       title: await findScene(1),
       user: await findUser(1),
       prompt1: await findPromptOptById(1),
       prompt2: await findPromptOpt2ById(1),
       title2: await findScene(2),
      prompt21: await findPromptOptById(2),
      prompt22: await findPromptOpt2ById(2),
      title3: await findScene(3),
      prompt31: await findPromptOptById(3),
      prompt32: await findPromptOpt2ById(3)
    }; // ----------testing different ways to make the buttons function. Passing in a few scenes right now...

  res.render("game", data); 

});


// Handling user signup
app.post("/register", async (req, res) => {
    const user = await User.create({
      username: req.body.username,
      password: req.body.password
    });
    
    return res.status(200).json(user);
  });
  
//Showing login form
app.get("/login", function (req, res) {
    res.render("login");
});
  
//Handling user login
app.post("/login", async function(req, res){
    try {
        // check if the user exists
        const user = await User.findOne({ username: req.body.username });
        if (user) {
          //check if password matches
          const result = req.body.password === user.password;
          if (result) {
            res.render("secret");
          } else {
            res.status(400).json({ error: "password doesn't match" });
          }
        } else {
          res.status(400).json({ error: "User doesn't exist" });
        }
      } catch (error) {
        res.status(400).json({ error });
      }
});
  
//Handling user logout 
app.get("/logout", function (req, res) {
    req.logout(function(err) {
        if (err) { return next(err); }
        res.redirect('/');
      });
});
  
  
  
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/login");
}
  
var port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log("Server Has Started!");
});


