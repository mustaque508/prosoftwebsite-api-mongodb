/********************** userInfo Controller *******************************/
const { Router } = require("express");
const router = Router();
const Auth = require("../config/auth");
const Model = require("../models/userInfo");

//user info
router.post(
  "/api-user-info",
  Auth.ensureToken,
  Model.storeUserInfoData,
  (req, res) => {
    const { insertID } = res.locals;
    res.status(200).json({ insertID });
  }
);

//update user-info
router.patch(
  "/api-update-userinfo/:id",
  Auth.ensureToken,
  Model.updateUserInfoData,
  (req, res) => {
    res.status(201).json({ success: true });
  }
);

module.exports = router;
