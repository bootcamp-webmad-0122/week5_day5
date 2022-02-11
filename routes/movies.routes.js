const router = require("express").Router()
const fileUploader = require('../config/cloudinary.config')

const Movie = require('./../models/Movie.model')



router.get("/crear", (req, res, next) => res.render("movies/new-movie"))

router.post("/crear", fileUploader.single('imageFile'), (req, res, next) => {
  // console.log(req.body)
  // console.log(req.file)

  const { title, year } = req.body

  Movie
    .create({ title, year, imageUrl: req.file.path })
    .then(() => res.redirect('/peliculas/galeria'))
    .catch(err => next(err))
})



router.get("/galeria", (req, res, next) => {

  Movie
    .find()
    .then(movies => res.render('movies/gallery', { movies }))
    .catch(err => next(err))

})


module.exports = router