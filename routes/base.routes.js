const router = require("express").Router()
const transporter = require('./../config/transporter.config')

/* GET home page */
router.get("/", (req, res, next) => res.render("index"))




router.get('/contacto', (req, res) => res.render('contact/contact-form'))

router.post('/contacto', (req, res) => {

  const { email, subject, message } = req.body

  transporter.sendMail({
    from: '"My Awesome Project " <myawesome@project.com>',
    to: email,
    subject,
    text: message,
    html: '<b>' + message + '</b>'
  })
    .then(info => res.send(info))
    .catch(error => console.log(error))

})

module.exports = router;
