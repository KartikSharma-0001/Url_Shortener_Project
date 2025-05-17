import express from 'express'
import mongoose from 'mongoose'
import path from 'path'
import {shortUrl,getOriginalUrl} from  './/Controllers/url.js'

const app =  express();

app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(path.resolve(), 'public')))


mongoose.connect("mongodb+srv://kartiksharma4449:5nv6getRu0Ms9jAQ@cluster0.56llqmh.mongodb.net/",{
    dbName: "URL_Shortener" 
}
).then(() => console.log("MongoDb Connected....!")).catch((err)=>console.log(err))


//rendering the ejs file

app.get('/', (req,res)=>{
    res.render("index.ejs", {shortUrl:null})
});

//shorting Url Logic
app.post('/shorten', shortUrl)

// redirect to original Url using shortUrl created. =>>> DYNAMIC ROUTING
app.get('/:shortUrl_Created',getOriginalUrl)
const port = 1000;
app.listen(port,()=> console.log(`Server is running on port: ${port}`))