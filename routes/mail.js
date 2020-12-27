const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport')

require('dotenv').config();

const auth = {
    auth: {
        api_key: process.env.API_KEY,
        domain: process.env.DOMAIN,
    }
}

const transporter = nodemailer.createTransport(mailGun(auth));

const sendMail = (name, email, subject, message, cb) => {
    const mailOption = {
        sender: name,
        from: email,
        to: 'deepjyotiroy079@gmail.com',
        subject: subject,
        text: message,
    }

    transporter.sendMail(mailOption, (err, data)=>{
        if(err) {
            cb(err, null); // TODO: GETTING TIMEOUT WHILE SENDING MESSAGE
        } else {
            cb(null, data);
        }
    })
}

module.exports = sendMail;