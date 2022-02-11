module.exports = app => {

  // Base routes
  app.use("/", require("./base.routes"))
  app.use("/peliculas", require("./movies.routes"))

}