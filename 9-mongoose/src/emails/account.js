const sgMail = require('@sendgrid/mail');


sgMail.setApiKey(process.env.SENDGRID_API_KEY)

// sgMail.send({
//   to:'skoco73@gmail.com',
//   from:'skoco73@gmail.com',
//   subject:' 안녕하세요 첫 메일이네요',
//   text: '떨려요'
// })

const sendWelcomeEmail = (email,name) => {
  sgMail.send({
  to:email,
  from: 'skoco73@gmail.com' ,
  subject : ' Hi ! This is su=)',
  text : `Welcome to the App ${name}, so excited!`
})

}

const sendCancelationEmail = (email,name) => {
  sgMail.send({
    to :email,
    from: 'skoco73@gmail.com',
    subject : ' Sorry to see you go!',
    text: `Goodbye, ${name}! I hope to see you back sometime soon...`
  })
}

module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail
}