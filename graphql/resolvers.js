const Article = require('../models/article');          

function articles() {                     
  return Article.find({});
}

function article(args) {
  return Article.findById(args.id)
}

async function createArticle(args) {
  let article = new Article(args.articleInput);
  return article.save();
}

function deleteArticle(args) {
  return Article.findByIdAndRemove(args.id);
}

function updateArticle(args) {
  return Article.findByIdAndUpdate(args.id, args.articleInput);
}

module.exports = { articles, article, createArticle, deleteArticle, updateArticle }