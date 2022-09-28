const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const database = require('./db/database');
const connectionString= 'mongodb+srv://makkapakka:tSJexvYX6apIo3Nz@cluster0.5gq2r05.mongodb.net/?retryWrites=true&w=majority';

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

const userRoute = require('./routes/user.route');
const { url } = require('inspector');

const app = express();
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cors());

app.use('/api', userRoute)

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log('PORT connected: ' + port)
})

app.use(function (error, res,) {
  console.error(error.message);
  if (!error.statusCode) error.statusCode = 500;
  res.status(error.statusCode).send(error.message);
});