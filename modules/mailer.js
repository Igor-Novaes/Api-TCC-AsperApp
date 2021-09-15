const nodemailer = require('nodemailer');
const path = require ('path');
const teste = require('../app/resources/mail/auth/')
const hbs = require('nodemailer-express-handlebars')
const {host, port, user, pass}=  require ('../config/mailer.json')
const transport = nodemailer.createTransport({
    host,
    port,
    auth: { user, pass },
  });

  transport.use('compile', hbs({
    viewEngine: 'handlebars',
    viewPath: path.resolve('../app/resources/mail/auth/'),
    extName: '.html',

  }))

  module.exports = transport