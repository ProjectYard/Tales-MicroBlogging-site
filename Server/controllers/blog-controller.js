import Blog from '../models/Blog';

export const getAllBlogs = async (req,res,next)=>{
    let blogs;
    try {
        blogs = await Blog.find();
    } catch (err) {
        return console.log(err);
    }
    if(!blogs){
        return res.status(404).json({message:"No blogs found"});
    }
    return res.status(200).json({blogs})
}

export const postBlog = async (req,res,next) =>{
    const {title,description,image,user} = req.body;
    const blog = new Blog({
        title,
        description,
        image,
        user
    });
    try {
      await blog.save();
    } catch (err) {
      return console.log(err);
    }
    return res.status(201).json({ blog });
}