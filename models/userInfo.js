/********************** user Info Model *******************************/
const schemas = require("../schemas/main_schema");

//store  user informations into database
exports.storeUserInfoData = async (req, res, next) => {
  try {
    const {
      f_name,
      contact_no,
      dept_email_id,
      department,
      designation,
      address,
      serialKey,
      razorpayOrderId,
      razorpayPaymentId,
      razorpaySignature,
      status,
      productId,
    } = req.body;

    const newUserInfo = new schemas.user_info({
      fullName: f_name,
      contactNo: contact_no,
      deptEmailId: dept_email_id,
      department,
      designation,
      address,
      serialKey,
      razorpayOrderId,
      razorpayPaymentId,
      razorpaySignature,
      status,
      productId,
    });

    const result = await newUserInfo.save();

    //successfully values stored in database
    if (result) {
      res.locals.insertID = result._id;
      next();
    }
  } catch (err) {
    res.status(500).send(`Internal Server Error : ${err}`);
  }
};

//update user information details into database
exports.updateUserInfoData = async (req, res, next) => {
  try {
    //get _id from URL
    const _id = req.params.id;

    //get user details to update
    const {
      serialKey,
      razorpayOrderId,
      razorpayPaymentId,
      razorpaySignature,
      status,
      productID,
    } = req.body;

    // data to update
    const data = {
      serialKey,
      razorpayOrderId,
      razorpayPaymentId,
      razorpaySignature,
      status,
      productId: productID,
    };

    //update database based on _id
    const result = await schemas.user_info.findByIdAndUpdate({ _id }, data, {
      new: true,
    });

    //successfully values stored in database
    if (result) {
      next();
    }
  } catch (err) {
    res.status(500).send(`Internal Server Error : ${err}`);
  }
};
