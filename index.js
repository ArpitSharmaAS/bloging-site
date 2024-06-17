const express = require('express');
const mongoose = require('mongoose')

const app = express()

app.use(express.json())

const port = 3000;

mongoose.connect("mongodb+srv://arpitsharmably18:<password>@cluster0.4xoxq4j.mongodb.net/bloging-site",{useNewUrlParser: true})
.then(console.log('mongoDb conected'))
.catch((err)=>{
    console.log(err.message)
})

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

app.listen(port, ()=>{
    console.log(`server is runing on port ${port}`)
})