const express = require("express")
require("dotenv").config()
const app = express()
const port = process.env.PORT || 3003
const BakedGoods = require("./models/bakedGoods")
const CustomOrder = require("./models/customOrders")
const methodOverride = require("method-override")
const mongoose = require("mongoose")

//DB Connection
mongoose.connect(process.env.MONGO_URI);
mongoose.connection.once("open", () => {
    console.log("connected to mongo");
  });

  
  //Middleware
  app.use(express.urlencoded({extended:true}))
  app.use(methodOverride("_method")); //Sets up method override for use


app.set("view engine","jsx")
app.engine("jsx", require("express-react-views").createEngine())


// Seed route
// app.get('/api/v1/sweets/seed', async (req, res) => {
//   await BakedGoods.deleteMany({}) //Clear database
//   await BakedGoods.create(BakedGoodsData)
//     res.redirect('/api/v1/sweets/')
// })

//our routes
app.get("/api/v1/sweets/", (req, res) => {
  BakedGoods.find({}, (error, allbakedGoods) => {
    res.render('Index', {bakedGoods: allbakedGoods})
   })
  })


app.get("/api/v1/sweets/new", (req, res) => {
  res.render("New")
})

app.get("/api/v1/sweets/customs", (req, res) => {
  res.render("Customs")
})

app.get("/api/v1/sweets/thankyou", (req, res) => {
  res.render("ThankYou")
})

// Create
app.post("/api/v1/sweets/customs" , (req, res) => {
  console.log('in customs')
  CustomOrder.create(req.body, (error, createdCustomOrder) => {
    console.log(req.body)
    console.log('hosting custom order')
    res.redirect("/api/v1/sweets/thankyou")
  })
})


app.post("/api/v1/sweets/" , (req, res) => {
  BakedGoods.create(req.body, (error, createdBakedGoods) => {
    console.log(req.body)
    res.redirect("/api/v1/sweets/")
  })
})

//Show route
app.get("/api/v1/sweets/:id", (req, res) => {
  BakedGoods.findById(req.params.id, (err, foundBakedGoods) => {
    res.render('Show', {bakedGoods: foundBakedGoods})
  })
})

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
  BakedGoods.findByIdAndUpdate(req.params.id,req.body, {
      new: true,
    }, (error, bakedGoods) => {
       res.redirect(`/api/v1/sweets/${req.params.id}`)
    })
})

//Delete Route
app.delete("/api/v1/sweets/:id", (req, res) => {
    BakedGoods.findByIdAndRemove(req.params.id, (err, data) => {
    res.redirect("/api/v1/sweets/");
  });
});


app.listen(port, () => {
    console.log(`*** Listening on http://localhost:${port} ***`)
}) 