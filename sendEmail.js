// Using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
const sgMail = require("@sendgrid/mail");

// read environment variables from .env file
require("dotenv").config();

// use APIKEY provided by SendGrid. 
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// craft your message
const msg = {
  to: "cat@email.com", // Change to your recipient
  from: "me@email.com", // Change to your verified sender
  subject: "Sending with SendGrid is Fun",
  text: "and easy to do anywhere, even with Node.js",
  html: "<strong>and easy to do anywhere, even with Node.js</strong>",
};

// send the email
sgMail
  .send(msg)
  .then(() => {
    console.log("Email sent");
  })
  .catch((error) => {
    console.error(error);
  });
