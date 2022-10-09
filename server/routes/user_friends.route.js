const express = require('express');
const userFriendsRoute = express.Router();
const UserFriendsModel = require('../model/UserFriends');

userFriendsRoute.route('/').post((req, res, next) => {
  UserFriendsModel.create(req.body, (err, data) => {
    if (err) {
      return next(err)
    } else {
      res.json(data)
      console.log('UserFriends created:', data)
    }
  })
});

userFriendsRoute.route('/:id').get((req, res) => {
  UserFriendsModel.findById(req.params.id, (err, data) => {
    if (err) {
      return next(err)
    } else {
      res.json(data)
      console.log('UserFriends fetched:', data)
    }
  })
});

module.exports = userFriendsRoute;