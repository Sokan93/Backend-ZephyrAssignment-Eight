const http = require("http");
const express = require('express');
const dotenv = require("dotenv").config();
const mongoose = require("mongoose")
const User = require("./user.js")

const app = express();

app.use(express.json())


//Database Connection 
mongoose.connect(`${process.env.MONGODB_URL}`)
  .then(() => console.log('Database Connected!'));

const PORT = process.env.PORT || 3000

//Port listening
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`)
})

//add-user POST request
app.post("/add-user", (req, res) => {
  const {name, email, age} = req.body

  if(!name || name.length < 3 ) {
    return res.status(400).json({message: "Please input your name and ensure name is above three letters"})
  }

  const newUser = new User ({name, email, age})

  newUser.save()

  return res.status(200).json({
    message: "User successfully registered",
    user: newUser
  })
})