const authorModel = require('../Models/AuthorModel');
const {isempty} = require('../validator/validation')
const createAuthor = async (req, res)=>{
    const data = req.body;
    const {fName,lName,title,email,password} = data
    if(Object.keys(data).length == 0){
        return res.status(400).send({status: false, message: "all fields are mandatory"})
    }

    if(!fName){
        return res.status(400).send({status: false, message: "first name not found"})
    }

    if(!isempty(lName)){
        return res.status(400).send({status: false, message: "last name not found"})
    }

    if(!isempty(title)){
        return res.status(400).send({status: false, message: "title not found"})
    }else{
        if(title != "Mr" || title != "Mrs" || title != "Miss"){
                 return res.status(400).send({status: false, message: "title only be Mr, Mrs, Miss"})
        }
    }

    if(!isempty(email)){
        return res.status(400).send({status: false, message: "email not found"})
    }

    if(!isempty(password)){
        return res.status(400).send({status: false, message: "plz enter password"})
    }
}
