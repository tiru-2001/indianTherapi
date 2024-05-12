import appointmentModel from "../models/appointMentSchema.js";
import paypal from "paypal-rest-sdk";
import nodemailer from "nodemailer";

let transporter;
const initPaypal = async () => {
  // Wait for environment variables to load
  await new Promise((resolve) => setTimeout(resolve, 100)); // Adding a small delay for safety
  paypal.configure({
    mode: process.env.PAYPAL_MODE,
    client_id: process.env.PAYPAL_CLIENT_ID,
    client_secret: process.env.PAYPAL_SECRET_KEY,
  });
  transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_AUTH,
    },
  });
};

initPaypal();

const paypalController = async (req, res) => {
  console.log("hi hello");
  try {
    const {
      name,
      email,
      phone,
      number,
      age,
      gender,
      date,
      country,
      amount,
      therapistname,
    } = req.body;

    let create_payment_json = {
      intent: "sale",
      payer: {
        payment_method: "paypal",
      },
      redirect_urls: {
        return_url: "https://api.indiatherapist.com/api/v1/pay/success",
        cancel_url: "https://api.indiatherapist.com/api/v1/pay/cancel",
      },
      transactions: [
        {
          item_list: {
            items: [
              {
                name: `${therapistname}`,
                sku: "item",
                price: `${amount}`,
                currency: "USD",
                quantity: 1,
              },
            ],
          },

          amount: {
            currency: "USD",
            total: `${amount}`,
          },
          description: "Thank you for your payment",
        },
      ],
    };
    paypal.payment.create(create_payment_json, async (error, payment) => {
      if (error) {
        throw error;
      } else {
        console.log(payment);
        for (let i = 0; i < payment.links.length; i++) {
          if (payment.links[i].rel === "approval_url") {
            const savedPaymentInformation = await new appointmentModel({
              paymentId: payment.id,
              name,
              phone,
              email,
              number,
              amount,
              date,
              country,
              age,
              gender,
              therapistname,
            }).save();
            console.log(savedPaymentInformation);

            res.send({
              success: true,
              link: payment.links[i].href,
            });
          }
        }
      }
    });
  } catch (e) {
    console.log(e);
  }
};

// success controller
const successController = async (req, res) => {
  try {
    const payerId = req.query.PayerID;
    const paymentId = req.query.paymentId;
    const data = await appointmentModel.findOne({ paymentId });
    console.log(data);

    const execute_payment_json = {
      payer_id: payerId,
      transactions: [
        {
          amount: {
            currency: "USD",
            total: `${data.amount}`,
          },
        },
      ],
    };

    paypal.payment.execute(
      paymentId,
      execute_payment_json,
      async function (error, payment) {
        if (error) {
          console.log("from execution");
          console.log(error);
          return res.redirect(`https://indiatherapist.com/cancelpayment`);
        } else {
          const response = payment;
          console.log(response);
          const mailOptions = {
            from: {
              name: "India Therapist",
              address: "etiru9.2001@gmail.com",
            },
            to: data.email,
            subject: "Payment Confirmation",
            text: `Thank you for your payment. Your appointment has been confirmed with ${data.therapistname} on ${data.date}`,
          };

          const sendMail = async (transporter, mailOptions) => {
            try {
              await transporter.sendMail(mailOptions);
              const finalresult = await appointmentModel.findOneAndUpdate(
                { paymentId: paymentId },
                { $set: { paymentStatus: "Paid" } },
                { new: true }
              );
              return res.redirect(
                `https://indiatherapist.com/successpayment?success=${encodeURIComponent(
                  "payment Success"
                )}`
              );
            } catch (err) {
              console.log(err);
              redirectSent = true;
              return res.redirect(
                `https://indiatherapist.com/cancelpayment?cancel=${encodeURIComponent(
                  "Please contact our customer care if you not receive confirmation mail"
                )}`
              );
            }
          };

          try {
            await sendMail(transporter, mailOptions);
          } catch (e) {
            console.log(e);
          }
        }
      }
    );
  } catch (e) {
    return res.redirect(
      `https://indiatherapist.com/cancelpayment?cancel=${encodeURIComponent(
        "Internal Server Error Contact our Customer care"
      )}`
    );
  }
};

//cancel controller
const cancelController = async (req, res) => {
  try {
    console.log("Payment Failed");
    return res.redirect(
      `https://indiatherapist.com/cancelpayment?cancel=${encodeURIComponent(
        "Payment canceled"
      )}`
    );
  } catch (e) {
    console.log("error");
    console.log(e);
    return res.redirect(
      `https://indiatherapist.com/cancelpayment?cancel=${encodeURIComponent(
        "Payment canceled"
      )}`
    );
  }
};

export { paypalController, successController, cancelController };

// try {
//   await
// } catch (e) {
//   console.log("catch from out");
//   throw e;
// }
