import express from "express";
import { getAllBlogs, postBlog } from "../controllers/blog-controller";

const blogrouter = express.Router();

blogrouter.get("/", getAllBlogs);
blogrouter.post("/add", postBlog);

export default blogrouter;
