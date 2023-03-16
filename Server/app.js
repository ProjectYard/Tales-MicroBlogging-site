import express from "express";
import mongoose from "mongoose";
import router from "./routes/user-routes";

const app = express();

// middleware
app.use("/api/user",router)

// G0WO4ZEUgWvb4tTs
mongoose
  .connect(
    "mongodb+srv://admin:G0WO4ZEUgWvb4tTs@cluster0.svyi1uh.mongodb.net/Tales?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(5000);
  })
  .then(() => {
    console.log("Connected To Database and listening to LocalHost:5000");
  })
  .catch((err) => {
    console.log(err);
  });


