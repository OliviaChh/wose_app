const express = require('express');
const userFriendsRoute = express.Router();
const UserFriendsModel = require('../model/UserFriends');

userFriendsRoute.route('/:id').get(async (req, res, next) => {
  const set1 = await UserFriendsModel.find({'user_id': req.params.id}, {'friend_id': 1}, (err) => {
    if (err) {
      res.status(500);
      console.error(err);
      return next(err)
    }
  })
  const set2 = await UserFriendsModel.find({'friend_id': req.params.id}, {'user_id': 1}, (err) => {
    if (err) {
      res.status(500);
      console.error(err);
      return next(err)
    }
  })
  const friends = [...set1, ...set2];
  console.log('UserFriends fetched:', friends)
  res.status(200).json(friends)
})

userFriendsRoute.route('/').post(async (req, res, next) => {
  const set1 = await UserFriendsModel.find({
    user_id: req.body.user_id, friend_id: req.body.friend_id
  });
  const set2 = await UserFriendsModel.find({
    user_id: req.body.friend_id, friend_id: req.body.user_id
  });
  if (set1.length === 0 && set2.length === 0) {
    UserFriendsModel.create(req.body, (err, data) => {
      if (err) {
        res.status(500);
        console.error(err);
        return next(err)
      } else {
        res.status(200).json(data)
        console.log('UserFriends created:', data)
      }
    })
  } else {
    res.status(409).json('Users already been friends');
  }
})
;

module.exports = userFriendsRoute;