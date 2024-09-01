const mongoose = require("mongoose");
//Write missing code 
mongoose.connect("mongodb+srv://arjunpbs:Arjunpbskl19d5569@cluster0.w10l0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.log(error);
  });
