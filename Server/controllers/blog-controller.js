import Blog from "../models/Blog";
import User from "../models/User";
import mongoose from "mongoose";

export const getAllBlogs = async (req, res, next) => {
  let blogs;
  try {
    blogs = await Blog.find();
  } catch (err) {
    return console.log(err);
  }
  if (!blogs) {
    return res.status(404).json({ message: "No blogs found" });
  }
  return res.status(200).json({ blogs });
};

export const postBlog = async (req, res, next) => {
  const { title, description, image, user } = req.body;
  let existingUser;
  try {
    existingUser = await User.findById(user);
  } catch (err) {
    return console.log(err);
  }
  if (!existingUser) {
    return res.status(400).json({ message: "Unable to find the user" });
  }
  const blog = new Blog({
    title,
    description,
    image,
    user,
  });
  try {
    const session = await mongoose.startSession();
    session.startTransaction();
    await blog.save({ session });
    existingUser.blogs.push(blog);
    await existingUser.save({ session });
    await session.commitTransaction();
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err });
  }
  return res.status(201).json({ blog });
};

export const editBlog = async (req, res, next) => {
  const blogId = req.params.id;
  const { title, description } = req.body;
  let blog;
  try {
    blog = await Blog.findByIdAndUpdate(blogId, {
      title,
      description,
    });
  } catch (error) {
    return console.log(error);
  }
  if (!blog) {
    return res.status(500).json({ message: "Unable to update the blog" });
  }
  return res.status(200).json({ blog });
};

export const getBlogById = async (req, res, next) => {
  const blogId = req.params.id;
  let blog;
  try {
    blog = await Blog.findById(blogId);
  } catch (error) {
    return console.log(error);
  }
  if (!blog) {
    return res.status(500).json({ message: "Unable to find the blog" });
  }
  return res.status(200).json({ blog });
};

export const delBlog = async (req, res, next) => {
  const blogId = req.params.id;
  let blog;
  try {
    blog = await Blog.findByIdAndDelete(blogId).populate('user');
    await blog.user.blogs.pull(blog);
    await blog.user.save();
  } catch (err) {
    return console.log(err);
  }
  if (!blogId) {
    return res.status(500).json({ message: "Data not found" });
  }

  return res.status(200).json({ message: blogId + " Deleted" });
};

export const getBlogByUser = async (req,res,next) =>{
  const userId = req.params.id;
  let userBlogs;
  try{
    userBlogs = await User.findById(userId).populate("blogs");

  }catch(err){
    return console.log(err);
  }
  if(!userBlogs){
    return res.status(404).json({message:"No Blog Found"})
  }
  return res.status(200).json({userBlogs:userBlogs});
}
