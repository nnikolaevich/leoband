var nodemailer = require("nodemailer");
var mailOptions = {from:"<nnikolaevich@gmail.com>", to:"leobanding@gmail.com", subject:"Hello ✔", text:"Hello world ✔", html:"<b>Hello world ✔</b>"};
var smtpTransport = nodemailer.createTransport("SMTP", {service:"Gmail", auth:{ user:"nnikolaevich1@gmail.com", pass:"googlevich"}});

/*smtpTransport.sendMail(mailOptions, function (error, response) {
    if (error) {
        console.log(error);
    } else {
        console.log("Message sent: " + response.message);
    }
});*/
//smtpTransport.close();


