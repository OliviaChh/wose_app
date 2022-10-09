const express = require('express');
const app = express();
const foodsRoute = express.Router();
let FoodsModel = require('../model/Foods');

foodsRoute.route('/').get((req, res) => {
    FoodsModel.find((error, foods) => {
        if (error) {
            return next(error)
        } else {
            res.json(foods)
            console.log('Foods retrieved!')
        }
    })
});