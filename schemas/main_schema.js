/********************** Main Schema *******************************/
const mongoose = require("mongoose");
const moment = require("moment");

// schema for contact us
const contactusSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  contactNo: {
    type: String,
    required: true,
  },
  emailId: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  contactedOn: {
    type: Date,
    default: Date.now,
  },
});

//schema for user info
const userinfoSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  contactNo: {
    type: String,
    required: true,
  },
  deptEmailId: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  designation: {
    type: String,
  },
  address: {
    type: String,
  },
  created_dt: {
    type: Date,
    default: Date.now,
  },
  serialKey: {
    type: String,
  },
  razorpayOrderId: {
    type: String,
    required: true,
  },
  razorpayPaymentId: {
    type: String,
    required: true,
  },
  razorpaySignature: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  installed_dt: {
    type: Date,
    default: Date.now,
  },
  productId: {
    type: String,
  },
});

//schema for partner registeration
const partnerRegistrationSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  contactNo: {
    type: String,
    required: true,
  },
  emailId: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  address: {
    type: String,
  },
  country: {
    type: String,
  },
  website: {
    type: String,
  },
  message: {
    type: String,
    required: true,
  },
  registeredOn: {
    type: Date,
    default: Date.now,
  },
});

//schema for subscriptionplan
const SubscriptionPlanSchema = new mongoose.Schema({
  subscriptionPlanNo: {
    type: Number,
    required: true,
  },
  subscriptionName: {
    type: String,
    required: true,
  },
  productID: {
    type: String,
    required: true,
  },
  productName: {
    type: String,
    required: true,
  },
  edition: {
    type: String,
    required: true,
  },
  amountBeforeGST: {
    type: Number,
    required: true,
  },
  IGST: {
    type: Number,
    required: true,
  },
  SGST: {
    type: Number,
    required: true,
  },
  CGST: {
    type: Number,
    required: true,
  },
  GST: {
    type: Number,
    required: true,
  },
  amountAfterGST: {
    type: Number,
    required: true,
  },
  currency: {
    type: String,
    required: true,
  },
  offerPrice: {
    type: Number,
    required: true,
  },
});

//schema for coupon
const couponSchema = new mongoose.Schema({
  couponCode: {
    type: String,
    required: true,
  },
  couponValue: {
    type: Number,
  },
  couponPercentage: {
    type: Number,
  },
  subscriptionPlanNo: {
    type: Number,
    required: true,
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
  expiryDate: {
    type: Date,
    default: "2021-01-31T11:59:00.524+00:00",
  },
  issuedTo: {
    type: String,
    required: true,
  },
  issuedDate: {
    type: Date,
    default: Date.now,
  },
  issuedBy: {
    type: String,
    default: "System",
  },
  isUsed: {
    type: Number,
    default: 0,
  },
  vendorId_customerId: {
    type: String,
  },
  couponOfferPrice: {
    type: Number,
    default: 0,
  },
  couponUsedDate: {
    type: String,
    default: "",
  },
  offerName: {
    type: String,
    default: "",
  },
  serialKey: {
    type: String,
    default: "",
  },
});

//schema for product
const productSchema = new mongoose.Schema({
  productID: {
    type: String,
    required: true,
  },
  productName: {
    type: String,
    required: true,
  },
  productVersion: {
    type: String,
  },
  productDesc: {
    type: String,
  },
  rate: {
    type: Number,
    required: true,
  },
  edition: {
    type: String,
  },
});

//exports schemas
exports.contact_us = mongoose.model("contact_us", contactusSchema);
exports.user_info = mongoose.model("user_infos", userinfoSchema);
exports.coupon = mongoose.model("coupons", couponSchema);
exports.product = mongoose.model("products", productSchema);
exports.partner_registration = mongoose.model(
  "partner_registrations",
  partnerRegistrationSchema
);
exports.subscription_plan = mongoose.model(
  "subscription_plans",
  SubscriptionPlanSchema
);
