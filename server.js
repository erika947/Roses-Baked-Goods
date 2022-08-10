const express = require("express")
require("dotenv").config()
const app = express()
const port = process.env.PORT || 3003
const BakedGoods = require("./models/bakedGoods")
const methodOverride = require("method-override")
const mongoose = require("mongoose")

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


app.set("view engine","jsx")
app.engine("jsx", require("express-react-views").createEngine())


//our routes
app.get("/api/v1/sweets/", (req, res) => {
    res.render("Index")
})

app.get("/api/v1/sweets/new", (req, res) => {
  res.render("New")
})

// Create
app.post("/api/v1/sweets/" , (req, res) => {
  BakedGoods.create(req.body, (error, createdBakedGoods) => {
    console.log(req.body)
    res.redirect("/api/v1/sweets/")
  })
})

//Show route
app.get("/api/v1/sweets/:id", (req, res) => {
  res.render("Show")
})

//Delete Route
app.delete("/api/v1/sweets/:id", (req, res) => {
  //First arg is ID we want to delete, 2nd arg is callback function
  BakedGoods.findByIdAndRemove(req.params.id, (err, data) => {
    res.redirect("/api/v1/sweets/");
  });
});

//Edit
app.get("/api/v1/sweets/:id/edit", (req, res) => {
  BakedGoods.findById(req.params.id, (error, foundBakedGoods) => {
      if(!error) {
          res.render("Edit",{
              bakedGoods: foundBakedGoods
          })
      } else {
          res.send({
              message: error.message
          })
      }
  })
  
})

//Put new information in DB
app.put("/api/v1/sweets/:id", (req, res) => {
  BakedGoods.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    },
    (error, bakedGoods) => {
      res.redirect(`/api/v1/sweets/${req.params.id}`);
    }
  );
});

app.listen(port, () => {
    console.log(`*** Listening on http://localhost:${port} ***`)
}) 