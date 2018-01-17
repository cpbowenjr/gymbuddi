require('dotenv').config();

const express = require('express')
  , session = require('express-session')
  , bodyParser = require('body-parser')
  , massive = require('massive')
  , passport = require('passport')
  , Auth0Strategy = require('passport-auth0');

const {AUTH_DOMAIN, AUTH_CLIENT_ID, AUTH_CLIENT_SECRET, AUTH_CALLBACK_URL, SECRET, SERVER_PORT, SESSION_SECRET} = process.env;
const app = express()
  
  massive( process.env.CONNECTIONSTRING ).then( (db) => {
    app.set('db', db);
  })
  
  app.use(bodyParser.json() );
  app.use(session({
      secret: SESSION_SECRET,
      resave: false,
      saveUninitialized: false
  }))

  app.use(passport.initialize());
  app.use(passport.session());

  passport.use(new Auth0Strategy({
    domain: AUTH_DOMAIN,
    clientID: AUTH_CLIENT_ID,
    clientSecret: AUTH_CLIENT_SECRET,
    callbackURL: AUTH_CALLBACK_URL,
    scope: 'openid profile'
  },

  function(accessToken, refreshToken, extraParams, profile, done) {
    let {_json} = profile;
    let {displayName, user_id, picture} = profile;
    const db = app.get('db')
    
    db.find_user([user_id]).then(function(users){
        console.log(users)
        if(!users[0]){
            db.create_user([
                displayName,
                'test@test.com',
                picture,
                user_id
            ]).then(user => {
               return done(null, user[0].id)
            })
        } else {
            return done(null, users[0].id)
        }
    })
  }))
 
  passport.serializeUser((id, done) => {
    return done(null, id)
  })
  
  passport.deserializeUser((id, done) => {
    app.get('db').find_session_user(id).then(function(user) {
      return done(null,user[0])
    })
  })

  // ---END POINTS---
app.get('/auth', passport.authenticate('auth0'));
app.get('/auth/callback', passport.authenticate('auth0', {
    successRedirect: 'http://localhost:3000/#/dashboard',
    failureRedirect: 'http://localhost:3000/'
}));
app.get('/auth/me', (req,res) => {
    if (!req.user) {
        res.status(404).send('user not found');
    } else {
        res.status(200).send(req.user);
    }
})

app.get('/auth/logout', function(req,res) {
    req.logOut();
    res.redirect('http://localhost:3000/')
})


app.listen(SERVER_PORT, () => {
    console.log(`You are on port ${SERVER_PORT}!`)
});


