const express = require('express');
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
})

user_profileRoute.route('/:uname').get((req, res) => {
  User_profileModel.findOne({'uname': req.params.uname}, (error, data) => {
    if (!error) {
      console.log('UsersProfile fetched succeed:', JSON.stringify(data))
      res.status(200).json(data);
    } else {
      console.error(error);
      res.status(500);
    }
  })
})

module.exports = user_profileRoute;