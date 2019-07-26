const { Schema, model } = require('mongoose');

const articleSchema = new Schema({ 
  title: String,
  content: String
});

module.exports = model('Article', articleSchema);