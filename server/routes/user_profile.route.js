const express = require('express');
const app = express();
const user_profileRoute = express.Router();
let User_profileModel = require('../model/User_profile');

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