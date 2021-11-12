/********************** partner  Registration  model *******************************/

const schemas = require("../schemas/main_schema");

//store all partner_registration details into database
exports.storePartnerRegistrationData = async (req, res, next) => {
  try {
    const {
      f_name,
      contact_no,
      f_email,
      company,
      address,
      country,
      website,
      message,
    } = req.body;

    const newPartnerRegstration = new schemas.partner_registration({
      fullName: f_name,
      contactNo: contact_no,
      emailId: f_email,
      company,
      address,
      country,
      website,
      message,
    });

    const result = await newPartnerRegstration.save();

    //successfully values stored in database
    if (result) {
      next();
    }
  } catch (err) {
    res.status(500).send(`Internal Server Error : ${err}`);
  }
};
