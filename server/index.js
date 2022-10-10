const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const connectionString = 'mongodb+srv://makkapakka:tSJexvYX6apIo3Nz@cluster0.5gq2r05.mongodb.net/?retryWrites=true&w=majority';

// MongoDB connection 
mongoose.Promise = global.Promise;
mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Database connected ')
},
  error => {
    console.log('Database not connected : ' + error)
  }
)

//update any new route!!!
const userRoute = require('./routes/user.route');
const user_profileRoute = require('./routes/user_profile.route');
const foodsRoute = require('./routes/foods.route');
const tutorialsRoute = require('./routes/tutorials.route');
const audiencesRoute = require('./routes/audiences.route');
const userFriendsRoute = require('./routes/user_friends.route');

/**---------------------------------------------------------------- */
const { url } = require('inspector');
const app = express();
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cors());

//update any new route with api !!!
app.use('/api', userRoute)
app.use('/userprofile', user_profileRoute)
app.use('/foods', foodsRoute)
app.use('/tutorials', tutorialsRoute)
app.use('/user-friends', userFriendsRoute)
app.use('/audiences', audiencesRoute)


/**---------------------------------------------------------------- */

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log('PORT connected: ' + port)
})

app.use(function (error, res,) {
  console.error(error.message);
  if (!error.statusCode) error.statusCode = 500;
  res.status(error.statusCode).send(error.message);
});