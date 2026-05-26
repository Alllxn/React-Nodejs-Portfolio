// server/index.js

require("dotenv").config();
const express = require("express");
const router = express.Router();
const cors = require("cors");
const { Resend } = require("resend");
const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(PORT, () => console.log("Server Running | " + PORT));

const resend = new Resend(process.env.RESEND_API_KEY);

const messages = {
  es: { success: "¡Correo enviado!", error: "Error al enviar el correo." },
  en: { success: "Email sent!", error: "Error sending the email." },
};

router.post("/contact", async (req, res) => {
  const { name, email, subject, message, lang } = req.body;
  const msg = messages[lang] ?? messages.en;

  const { error } = await resend.emails.send({
    from: "Portfolio <contact@allandev.es>",
    to: "contact@allandev.es",
    subject: `${subject} (Email send from Portfolio)`,
    html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
    reply_to: email,
  });

  if (error) {
    console.log(error);
    res.json({ status: false, message: msg.error });
  } else {
    res.json({ status: true, message: msg.success });
  }
});
