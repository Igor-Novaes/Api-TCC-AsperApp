const nodemailer = require('nodemailer');
const path = require ('path');
const hbs = require('nodemailer-express-handlebars')
const {host, port, user, pass}=  require ('../config/mailer.json')
const transport = nodemailer.createTransport({
    host,
    port,
    auth: { user, pass },
  });

  transport.use('compile', hbs({
    viewEngine: {
      partialsDir: 'some/path',
      layoutsDir:'./app/resources/mail/auth/',
      extName: '.html',
      defaultLayout: false
    },
    extName: '.html',
    viewPath: './app/resources/mail/auth/'
    

  }))

  module.exports = transport