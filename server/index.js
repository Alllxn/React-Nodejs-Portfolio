// server/index.js

require("dotenv").config();
const express = require("express");
const router = express.Router();
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const { Resend } = require("resend");
const PORT = process.env.PORT || 3001;

const app = express();
app.use(helmet());
app.use(cors({ origin: process.env.CORS_ORIGIN || "http://localhost:3000" }));
app.use(express.json());
app.use("/", router);
app.listen(PORT, () => console.log("Server Running | " + PORT));

const resend = new Resend(process.env.RESEND_API_KEY);

const messages = {
  es: { success: "¡Correo enviado!", error: "Error al enviar el correo." },
  en: { success: "Email sent!", error: "Error sending the email." },
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const escapeHtml = (str) =>
  String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

const contactLimiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
});

router.post("/contact", contactLimiter, async (req, res) => {
  const { name, email, subject, message, lang } = req.body;
  const msg = messages[lang] ?? messages.en;

  if (!name?.trim() || !subject?.trim() || !message?.trim()) {
    return res.status(400).json({ status: false, message: msg.error });
  }
  if (!email?.trim() || !emailRegex.test(email)) {
    return res.status(400).json({ status: false, message: msg.error });
  }
  if (name.length > 100 || subject.length > 70 || message.length > 3000 || email.length > 320) {
    return res.status(400).json({ status: false, message: msg.error });
  }

  const { error } = await resend.emails.send({
    from: "Portfolio <contact@allandev.es>",
    to: "contact@allandev.es",
    subject: `${subject} (Email sent from Portfolio)`,
    html: `<p>Name: ${escapeHtml(name)}</p><p>Email: ${escapeHtml(email)}</p><p>Message: ${escapeHtml(message)}</p>`,
    reply_to: email,
  });

  if (error) {
    console.error(error);
    res.json({ status: false, message: msg.error });
  } else {
    res.json({ status: true, message: msg.success });
  }
});
