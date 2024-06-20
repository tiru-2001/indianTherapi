import nodemailer from "nodemailer";

const loademailauth = () => {
  return nodemailer.createTransport({
    service: "Outlook365",
    host: "smtp.office365.com",
    port: 587,
    secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_AUTH,
    },
  });
};

export default loademailauth;
