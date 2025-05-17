import mongoose from 'mongoose'

const urlSchema = new mongoose.Schema({
    longUrl: String,
    shortUrl_Created: String,
})

export const Url = mongoose.model("shortUrl", urlSchema)