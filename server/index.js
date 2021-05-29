const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const dbConfig = require("./config/db.config");

const app = express();

// cors
app.use(cors());

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to my car service." });
});


// connect to mongoDb 
const db = require("./models");

db.mongoose
  .connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
		// init data test
    initRole();
    initUserAdmin();
    initCars();
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });


//--------------------------------------------------------------//
//-------------------- init data for test ---------------------//
//------------------------------------------------------------// 
const Role = db.role;
const Car = db.car;
const User = db.user;

// create role 
function initRole() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: "user"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'user' to roles collection");
      });

      new Role({
        name: "admin"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'admin' to roles collection");
      });
    }
  });
}

const bcrypt = require("bcryptjs");
function initUserAdmin() {
  User.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new User({
        username: 'admin',
        email: 'admin@admin.com',
        password: bcrypt.hashSync('admin1234', 8)
      }).save((err, user) => {
          if (!err) {
              Role.findOne({ name: "admin" }, (err, role) => {
                if(!err) {
                  user.roles = [role._id];
                  user.save(err => {
                    if (!err) {
                      console.log("admin was registered successfully!");
                    }
                  });
                }
              
            });
          }
      });
    }
  });
}

// create cars
function initCars() {
  Car.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
       const car = new Car ({
          name: "Citroen C4 1.7 Blue HDi",
          description: "Feux xénons - Sièges cuir/tissu - Jantes Alu",
          mark:"Citroen",
          year:"2020",
          carburant:"Diesel",
          price:1500
       });
       car.save(err => {
        if (err) {
          console.log("error", err);
        }

        for ( let i = 0; i< 7; i ++ ) { 
            new Car ({
              name: "Renault Clio- "+i,
              description: "Sièges tissu - Verrouillage électrique des portes - Climatisation manuelle",
              mark:"Citroen",
              year:"2020",
              carburant:"Diesel",
              price:(1500+i)*2
          }).save(err => {
            if (err) {
              console.log("error", err);
            }
          });
        }

        console.log("added cars in collection");
      });
       
      
    }
  });

}


// api  
require("./routes/auth.routes")(app);
require("./routes/car.routes")(app);
require("./routes/comment.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});