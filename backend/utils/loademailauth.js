import nodemailer from "nodemailer";

const loademailauth = () => {
  return nodemailer.createTransport({
    service: "Outlook365",
    host: "smtp.office365.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_AUTH,
    },
  });
};

export default loademailauth;
