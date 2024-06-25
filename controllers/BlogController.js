
const blogModel = require('../Models/blogModel')
const authorModel = require('../Models/AuthorModel');
const {isempty} = require('../validator/validation')

const createBlog = async (req, res)=>{
const data = req.body;
const {title, body, category, authorId} = data

if(Object.keys(data).length == 0){
    return res.status(400).send({status: false, message: "all fields are mandatory"})
}

if(isempty(title)){
    return res.status(400).send({status: false, message: "title not found"})
}
if(isempty(body)){
    return res.status(400).send({status: false, message: "plz write some text"})
}
if(isempty(category)){
    return res.status(400).send({status: false, message: "Enter blog category"})
}
if(isempty(authorId)){
    return res.status(400).send({status: false, message: "authorId not found"})
}

const AuthorIdCheck = await authorModel.findById(authorId)
if(!AuthorIdCheck){
    return res.status(400).send({status: false, message: "Author not found"})
}

const newBlog = await blogModel.create(data);
res.status(201).send({status: true, message: "Blog Create Succesfully", data: newBlog})

}

// query for find all blogs

const allBlogs = async (req, res)=>{
    const getAllBlog = await blogModel.find()
    if(!getAllBlog){
        return res.status(404).send({status: false, message: "blog not found"})
    }
    return res.status(200).send({status: true, data: getAllBlog})
}

// query for find Published blogs

module.exports = {createBlog, allBlogs}