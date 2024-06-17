const authorModel = require('../Models/AuthorModel');

const createAuthor = async (req, res)=>{
    const data = req.body;
    const {fName,lName,title,email,password} = data
}