const express = require('express');
const tutorialsRoute = express.Router();
const TutorialsModel = require('../model/Tutorials');
const TutorialAudiencesModel = require('../model/TutorialAudiences');

tutorialsRoute.route('/').get((req, res) => {
  TutorialsModel.find((error, data) => {
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

tutorialsRoute.route('/:id/audiences').get((req, res) => {
  TutorialAudiencesModel.find({'tid': req.params.id}, (error, data) => {
    if (!error) {
      console.log('Tutorial audiences fetched succeed:', JSON.stringify(data))
      res.status(200).json(data);
    } else {
      console.error(error);
      res.status(500);
    }
  })
})

tutorialsRoute.route('/:id/audiences').post((req, res) => {
  TutorialAudiencesModel.create([{
    'tid': req.params.id,
    'uname': req.body.uname,
    'start_time': Date.now()
  }], (error, data) => {
    if (!error) {
      console.log('Tutorial audience added succeed:', JSON.stringify(data))
      res.status(200).json(data);
    } else {
      console.error(error);
      res.status(500);
    }
  })
})

module.exports = tutorialsRoute;