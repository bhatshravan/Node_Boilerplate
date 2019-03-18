const express = require("express");
const path = require("path");
const User_controller = require("../controllers/Users_controllers");
const Camera = require("../models/Users");


const authError = (err, req, res, next) => {
  return res.status(401).json({ success: false, message: "unauthorized" });
};

module.exports = app => {
  const Users = express.Router();
  
  
  //or
  
  
  //Users page
  app.use('/Users',Users_router);

  ///Login page
  app.all("/", (req, res) => {
    res.render("login");
  });
  
  app.get("/AdminDashboard", (req, res) => {
    res.render("AdminDashboard/index");
  });

  app.get("/AdminDashboard/cameras", (req, res) => {
    Camera.find((err, data) =>
      res.render("AdminDashboard/cameras", { cameras: data })
    );
  });


  app.use("/AdminDashboard", Patient);
  Patient.post("/newPatient", Patient_controller.newPatient);



  //Error page
  app.get("*", (req, res) => {
    res.status(404);
    res.render("404");
  });
};

function sendRep(err, data, req, res) {
  if (err) {
    res.status(500).json({ err: err });
    console.log("[] Error logging in: " + err);
  } else {
    //res.redirect('/index');
    res.status(200).json(data);
  }
}

function logs(data) {
  console.log("[] " + data);
}
