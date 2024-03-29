import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/user-routes";
import blogRouter from "./routes/blog-routes";

const app = express();

// middleware
app.use(express.json())
app.use("/api/user",userRouter)
app.use("/api/blog", blogRouter);

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


