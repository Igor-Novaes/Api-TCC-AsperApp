const nodemailer = require('nodemailer');
const {host, port, user, pass}=  require ('../config/mailer.json')
const transport = nodemailer.createTransport({
    host,
    port,
    auth: { user, pass },
  });

  module.exports = transport