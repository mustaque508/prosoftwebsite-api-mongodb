/********************** Partner Registration Controller *******************************/
const { Router } = require("express");
const router = Router();
const Auth = require("../config/auth");
const Model = require("../models/partnerRegistration");

//partner registeration
router.post(
  "/api-partner-registration",
  Auth.ensureToken,
  Model.storePartnerRegistrationData,
  (req, res) => {
    res.status(201).json({ success: true });
  }
);

module.exports = router;
