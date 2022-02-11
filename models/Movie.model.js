const { Schema, model } = require("mongoose");

const movieModel = new Schema(
  {
    title: String,
    year: Number,
    imageUrl: String
  },
  {
    timestamps: true
  }
);

const Movie = model("Movie", movieModel);

module.exports = Movie