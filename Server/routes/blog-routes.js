import express from "express";
import {
  getAllBlogs,
  postBlog,
  editBlog,
  getBlogById,
  delBlog
} from "../controllers/blog-controller";

const blogrouter = express.Router();

blogrouter.get("/", getAllBlogs);
blogrouter.post("/add", postBlog);
blogrouter.put("/edit/:id", editBlog);
blogrouter.get("/:id", getBlogById);
blogrouter.delete("/:id",delBlog)
export default blogrouter;
