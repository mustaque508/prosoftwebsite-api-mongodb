/********************** Coupon Controller *******************************/
const { Router } = require("express");
const Auth = require("../config/auth");
const Model = require("../models/coupon");
const router = Router();

//store coupon details
router.post(
  "/api-store-coupon",
  Auth.ensureToken,
  Model.storeCouponData,
  (req, res) => {
    res.status(201).json({ success: true });
  }
);

//get coupon details
router.get(
  "/api-get-couponDetails",
  Auth.ensureToken,
  Model.getCouponCodes,
  (req, res) => {
    const { validCouponCode } = res.locals;
    res.status(200).send(validCouponCode);
  }
);

//update coupon details
router.patch(
  "/api-update-coupon",
  Auth.ensureToken,
  Model.updateCouponCode,
  (req, res) => {
    res.status(201).json({ success: true });
  }
);
module.exports = router;
