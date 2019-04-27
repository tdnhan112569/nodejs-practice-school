const mogoose = require('mongoose')

// Schema

const Schema = mongoose.Schema;

const userSchema = new Schema({
    avatar: String,
    lastName: String,
})