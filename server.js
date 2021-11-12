/***************************project run from this file ******************************************************/
require("./config/database");
const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 8000;
app.use(express.json());

// required contactUs[controller] to perform contactUs form  operation
app.use(require("./controllers/contactUs"));

// required partnerRegistration[controller] to perform partnerRegistration form  operation
app.use(require("./controllers/partnerRegistration"));

// required subscriptionPlan[controller] to perform subscriptionPlan form  operation
app.use(require("./controllers/subscriptionPlan"));

// required userInfo[controller] to perform userInfo form  operation
app.use(require("./controllers/userInfo"));

// required coupon[controller] to perform coupon   operation
app.use(require("./controllers/coupon"));

// running node server
app.listen(PORT, () => {
  console.log(`successfully server running on ${PORT}`);
});
