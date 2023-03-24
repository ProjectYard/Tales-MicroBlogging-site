import express from "express";
import {
  getAllBlogs,
  postBlog,
  editBlog,
  getBlogById,
  delBlog,
  getBlogByUser,
} from "../controllers/blog-controller";

const blogrouter = express.Router();

blogrouter.get("/", getAllBlogs);
blogrouter.post("/add", postBlog);
blogrouter.put("/edit/:id", editBlog);
blogrouter.get("/:id", getBlogById);
blogrouter.delete("/:id",delBlog);
blogrouter.get("/user/:id", getBlogByUser);
export default blogrouter;
