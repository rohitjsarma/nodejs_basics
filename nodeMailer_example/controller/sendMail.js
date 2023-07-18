const nodemailer = require("nodemailer");

const sendMial=async(req,res)=>{
   res.send("I am sending a mail")
   const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure:STARTTLS,
    auth: {
      user: 'ambrose25@ethereal.email',
      pass: '1jN9dH4b42YSzjAHuB'
    }
  });

  const info = await transporter.sendMail({
    from: '"rohit sharma👻" <rohit@gmail.com>', // sender address
    to: "sharma@gmail.com.com, baz@example.com", // list of receivers
    subject: "nodeMailer ✔", // Subject line
    text: "Hello Manu, this data is from node part 2 ", // plain text body
    html: "<b>Hello Node</b>", // html body
  });
  console.log("Message sent: %s", info.messageId);
  res.json(info)
}

module.exports= sendMial;