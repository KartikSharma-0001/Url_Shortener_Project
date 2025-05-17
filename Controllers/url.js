import {Url} from '../Models/Url.js'
import shortid from 'shortid'


export const shortUrl = async (req,res)=> {
    const longUrl= req.body.longUrl;
    const  shortUrl_Created = shortid.generate();
  
    const shortUrl = `http://localhost:1000/${shortUrl_Created}`

    //save to database

    const newUrl = new Url ({shortUrl_Created, longUrl})
    await newUrl.save();

    console.log("shortUrl saved =", newUrl);

    res.render("index.ejs", {shortUrl});
}


export const getOriginalUrl = async (req,res)=>{
 const shortUrl_Created = req.params.shortUrl_Created
//  res.json({message: "longUrl" , shortUrl_Created:shortUrl_Created })

  // find in database
  const originalUrl = await Url.findOne({shortUrl_Created})
  
  if(originalUrl){
    res.redirect(originalUrl.longUrl);
  }else{

      res.json({ message:"Invalid shortcode" });
  }

}
    
