const mongoose = require('mongoose')
const Post = require('./database/models/Post')

mongoose.connect('mongodb://localhost/node-js-test-blog')
 // Post.create({
 //   title: "My second blog post",
 //   description: 'Second blog post description',
 //   content: 'Lorem Ipsum content for second blog post'
 // }, (error, post) => {
 //    console.log(error, post)
 // })


 Post.find({}, (error, posts) => {
   console.log(error, posts)
 })

 // Post.findByIdAndUpdate("5b6eef62c9523b2cf41e343b", { title: "My modified second blog Post" }, (error, post) => {
 //   console.log(error, post)
 // })
