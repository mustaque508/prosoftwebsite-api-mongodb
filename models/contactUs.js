/********************** contact Us model *******************************/
const schemas = require("../schemas/main_schema");

//store all contact_us details  into database
exports.storeContactUsData = async (req, res, next) => {
  try {
    const { f_name, contact_no, f_email, subject, message } = req.body;

    const newContactUsDetails = new schemas.contact_us({
      fullName: f_name,
      contactNo: contact_no,
      emailId: f_email,
      subject,
      message,
    });

    const result = await newContactUsDetails.save();

    //successfully values stored in database
    if (result) {
      next();
    }
  } catch (err) {
    res.status(500).send(`Internal Server Error : ${err}`);
  }
};
