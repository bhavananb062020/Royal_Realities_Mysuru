const Contact = require("../models/contact");
const sendEmail = require("../utils/sendEmail");

exports.submitContact = async (req, res) => {

  try {
    console.log(req.body);
    const contact = await Contact.create(req.body);

    await sendEmail(req.body);

    res.status(200).json({
      message: "Form submitted successfully"
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message
    });

  }

};