const express = require('express')
require('dotenv').config()
const app = express()
const port = process.env.PORT || 3003
const BakedGoods = require('./models/bakedGoods')
const methodOverride = require('method-override')
const mongoose = require('mongoose')

//DB Connection
mongoose.connect(process.env.MONGO_URI);
mongoose.connection.once("open", () => {
    console.log("connected to mongo");
  });

  
  //Middleware
  app.use((req, res, next) => {
    console.log(`I run for all routes`);
    next();
  });
  app.use(methodOverride("_method")); //Sets up method override for use


app.set('view engine','jsx')
app.engine('jsx', require('express-react-views').createEngine())


//our routes
app.get('/', (req, res) => {
    res.send("Welcome To Rose's Baked Goods" )
})





app.listen(port, () => {
    console.log(`*** Listening on http://localhost:${port} ***`)
}) 