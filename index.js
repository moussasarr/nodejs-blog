const express = require('express')
const path = require('path')
const expressEdge = require('express-edge')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload')
const app = new express()
const Post = require('./database/models/Post')
const createPostController = require('./controllers/createPost')
const homePageController = require('./controllers/homePage')
const storePostController = require('./controllers/storePost')
const getPostController = require('./controllers/getPost')

mongoose.connect('mongodb://localhost/node-js-blog')
// app.use('/posts/store', validateCreatePostMiddleware)

app.use(fileUpload())
app.use(express.static('public'))
app.use(require('express-edge'));
app.set('views', `${__dirname}/views`);
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
const validateCreatePostMiddleware = (req, res, next) => {
  console.log(req.files)
  if (!req.files.image) {
     return res.redirect('/posts/new')
  }
  next()
}
app.use('/posts/store', validateCreatePostMiddleware)
app.get('/', homePageController)
app.get('/posts/new', createPostController)
app.post('/posts/store', storePostController)
app.get( '/post/:id', getPostController)

app.listen(4000, (req, res) => {
  console.log("App listening on Port 4000")
})
