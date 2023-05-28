// server/index.js

const dotenv = require("dotenv").config();
const express = require("express");
const router = express.Router(); //para entender las rutas mirar video guardado
const cors = require("cors");
const nodemailer = require("nodemailer");
const PORT = process.env.PORT || 3001 ;

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(PORT, () => console.log("Server Running | " + PORT));

var contactEmail = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "allan.esib@gmail.com",
        pass: "klhcgpeqmujsllwp",
    },
});

//.verify is a function from nodemailer to verify connection configuration
contactEmail.verify((error, success) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Ready to Send ");
    }
  });

  router.post("/contact", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const subject = req.body.subject; 
    const message = req.body.message; 

    const mail = {
      from: name,
      to: "contact@allandev.es",
      subject: subject + " (Email send from Portfolio)",
      html: `<p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Message: ${message}</p>`,
    };

    contactEmail.sendMail(mail, (error) => {
      if (error) {
        res.json({ status: false, message: "Error"});
      } else {
        res.json({ status: true, message: "Email sent"});
      }
    });
  });
  
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server! "+ process.env.PORT});
});