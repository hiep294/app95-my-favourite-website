const mongoose = require('mongoose');
const Schema = mongoose.Schema

const websiteSchema = new Schema({
  link: {
    type: String,
    required: [true, 'Link field is empty, please fill it up!']
  },
  description: {
    type: String,
    required: [true, 'Description field is empty, please fill it up!']
  },
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Website', websiteSchema);