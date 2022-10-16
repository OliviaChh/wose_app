const express = require('express');
const app = express();
const foodsRoute = express.Router();
const FoodsModel = require('../model/Foods');

foodsRoute.route('/').get((req, res) => {
    FoodsModel.find((error, foods) => {
        if (error) {
            return next(error)
        } else {
            res.json(foods)
            console.log('Food retrieved!')
        }
    })
});

foodsRoute.route('/create-food').post((req, res, next) => {
    FoodsModel.create(req.body, (err, foods) => {
        if (err) {
            return next(err)
        } else {
            res.json(foods)
            console.log('Food created!')
        }
    })
});

foodsRoute.route('/fetch-food/:id').get((req, res) => {
    FoodsModel.findById(req.params.id, (err, foods) => {
        if (err) {
            return next(err)
        } else {
            res.json(foods)
            console.log('Food fetch!')
        }
    })
});

module.exports = foodsRoute;