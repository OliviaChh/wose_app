const express = require('express');
const userFriendsRoute = express.Router();
const UserFriendsModel = require('../model/UserFriends');

const findFriendsByUid = (user_id) => UserFriendsModel.find({'user_id': user_id}, {'friend_id': 1});
const findFriendsByFid = (friend_id) => UserFriendsModel.find({'friend_id': friend_id}, {'user_id': 1});

userFriendsRoute.route('/:id').get(async (req, res, next) => {
  try {
    const set1 = await findFriendsByUid(req.params.id).clone();
    const set2 = await findFriendsByFid(req.params.id).clone();
    const friends = [...set1, ...set2];
    console.log('UserFriends fetched:', friends)
    res.status(200).json(friends)
  } catch (error) {
    console.log(error);
    res.status(500);
  }
})

userFriendsRoute.route('/').post(async (req, res, next) => {
  try {
    const set1 = await UserFriendsModel.find({
      user_id: req.body.user_id, friend_id: req.body.friend_id
    });
    const set2 = await UserFriendsModel.find({
      user_id: req.body.friend_id, friend_id: req.body.user_id
    });
    if (set1.length === 0 && set2.length === 0) {
      await UserFriendsModel.create(req.body);
      console.log('UserFriends created:', req.body);
      res.status(200);
    } else {
      res.status(409).json('Users already been friends');
    }
  } catch (err) {
    res.status(500);
    console.error(err);
    return next(err)
  }
});

module.exports = userFriendsRoute;