/********************** Contact Us  Controller *******************************/
const { Router } = require("express");
const router = Router();
const Auth = require("../config/auth");
const Model = require("../models/contactUs");

//contact us
router.post(
  "/api-contact-us",
  Auth.ensureToken,
  Model.storeContactUsData,
  (req, res) => {
    res.status(201).json({ success: true });
  }
);

module.exports = router;
