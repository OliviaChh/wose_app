const express = require('express');
const app = express();
const user_profileRoute = express.Router();
const User_profileModel = require('../model/User_profile');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
//const authorize = require('../middlewares/auth')
//const { check, validationResult } = require('express-validator')

//get user
user_profileRoute.route('/').get((req, res) => {
    User_profileModel.find((error, user) => {
    if (error) {
      return next(error)
    } else {
      res.json(user)
      console.log('Users retrieved!')
    }
  })
});

//sign-up + create
user_profileRoute.route('/create-user').post((req, res, next) => {
    User_profileModel.create(req.body, (err, user) => {
    if (err) {
      return next(err)
    } else {
      res.json(user)
      console.log('User created!')
    }
  })
});

// Sign-in
user_profileRoute.route('/signin').post((req, res, next) => {
  let getUser
  User_profileModel.findOne({ email: req.body.email })
    .then((user) => {
      console.log(`[Login email]:${email}`)
      if (!user) {
        return res.status(401).json({
          message: 'Authentication failed',
        })
      }
      getUser = user
      return bcrypt.compare(req.body.password, user.password)
    })
    .then((response) => {
      if (!response) {
        return res.status(401).json({
          message: 'Authentication failed',
        })
      }
      let jwtToken = jwt.sign({ email: getUser.email, userId: getUser._id},
        'longer-secret-is-better', { expiresIn: '1h'})
      res.status(200).json({ token: jwtToken, expiresIn: 3600, _id: getUser._id,})
    })
    .catch((err) => {
      return res.status(401).json({
        message: 'Authentication failed',
      })
    })
})

// Get Users
user_profileRoute.route('/').get((req, res, next) => {
  userSchema.find((error, response)=> {
    if (error) {
      return next(error)
    } else {
      return res.status(200).json(response)
    }
  })
})

//get id + user
user_profileRoute.route('/fetch-user/:id').get((req, res) => {
  UserModel.findById(req.params.id, (err, user) => {
    if (err) {
      return next(err)
    } else {
      res.json(user)
      console.log('User fetch!')
    }
  })
});

module.exports = user_profileRoute;
