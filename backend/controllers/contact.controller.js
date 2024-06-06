import contact from "../models/contact.Schema.js";
import loademailauth from "../utils/loademailauth.js";
import fs from "fs";
import xlsx from "xlsx";
import path, { resolve } from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, "../data/contacts.xlsx");
let transporter;

//initializing the email *******************************
const initemail = async () => {
  // Wait for environment variables to load
  await new Promise((resolve) => setTimeout(resolve, 100)); // Adding a small delay for safety

  transporter = loademailauth();
};
initemail();

//addcontact form controller ********************************
const addcontactform = async (req, res) => {
  try {
    const { name, email, country, city, whatsapp, happylife } = req.body;

    /*mailoptions*****************************************/
    const mailOptions = {
      from: {
        name: "India Therapist",
        address: "etiru9.2001@gmail.com",
      },
      to: email,
      subject: "Thank you for contacting us!",
      text: `Hi ${name},\n\nThank you for reaching out to us. We have received your message:\n\n"${happylife}"\n\nWe will get back to you shortly.\n\nBest regards,\nFrom RecommendationSystem`,
    };
    const nameExist = await contact.findOne({ whatsapp });
    console.log(nameExist);
    if (nameExist) {
      return res.status(200).send({
        message: "Data already exists.we will get back to you shortly.",
        success: true,
        exists: true,
      });
    }
    const finalResult = await new contact({
      name,
      email,
      country,
      city,
      whatsapp,
      happylife,
    }).save();

    const newContact = {
      name,
      email,
      date: new Date().toISOString(),
      country,
      whatsapp,
      happylife,
    };

    //creating excel sheet ******************************
    // Check if file exists
    let workbook;
    if (fs.existsSync(filePath)) {
      workbook = xlsx.readFile(filePath);
      const worksheet = workbook.Sheets[workbook.SheetNames[0]];
      const jsonData = xlsx.utils.sheet_to_json(worksheet);
      jsonData.push(newContact);
      const newWorksheet = xlsx.utils.json_to_sheet(jsonData);
      workbook.Sheets[workbook.SheetNames[0]] = newWorksheet;
    } else {
      const newWorksheet = xlsx.utils.json_to_sheet([newContact]);
      workbook = xlsx.utils.book_new();
      xlsx.utils.book_append_sheet(workbook, newWorksheet, "Contacts");
    }

    // Save the Excel file
    xlsx.writeFile(workbook, filePath);

    //sending the email to the user***********************************
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
        return res.status(500).send({ message: "Error sending email", error });
      }
      res.status(200).send({
        message:
          "we have recieved your contact details.Our member will contact you shortly.",
        success: true,
      });
    });

    return;
  } catch (err) {
    console.log(err);
    return res.status(400).send({
      message: "Please fill all the required fields.",
      success: false,
    });
  }
};

export { addcontactform };
