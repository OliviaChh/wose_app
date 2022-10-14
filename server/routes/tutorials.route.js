const express = require('express');
const tutorialsRoute = express.Router();
const TutorialsModel = require('../model/Tutorials');
const UserProfileModel = require('../model/User_profile');

tutorialsRoute.route('/').get((req, res) => {
  console.log("keywords", req.query.keywords);
  const reg = new RegExp(req.query.keywords, 'i')
  TutorialsModel.find({name: {$regex: reg}}, (error, data) => {
    if (!error) {
      console.log('Tutorials fetched succeed:', JSON.stringify(data))
      res.status(200).json(data);
    } else {
      console.error(error);
      res.status(500);
    }
  })
})

tutorialsRoute.route('/:id').get((req, res) => {
  TutorialsModel.findOne({'id': req.params.id}, (error, data) => {
    if (!error) {
      console.log('Tutorial info fetched succeed:', JSON.stringify(data))
      res.status(200).json(data);
    } else {
      console.error(error);
      res.status(500);
    }
  })
})

tutorialsRoute.route('/add-calories').post((req, res) => {
  UserProfileModel.updateOne({'id': req.body.userId}, {$inc: {'calories': req.body.calories}}, (error, data) => {
    if (!error) {
      console.log('User calories updated succeed:', JSON.stringify(data))
      res.status(200).json(data);
    } else {
      console.error(error);
      res.status(500);
    }
  })
})

module.exports = tutorialsRoute;