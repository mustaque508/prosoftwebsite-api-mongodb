/********************** subscriptionPlan Controller *******************************/
const { Router } = require("express");
const router = Router();
const Auth = require("../config/auth");
const Model = require("../models/subscriptionPlan");

//subscriptionplan
router.get(
  "/api-subscriptionplan",
  Auth.ensureToken,
  Model.getSubscriptionPlanData,
  (req, res) => {
    const { subscriptionplans } = res.locals;
    res.status(200).send(subscriptionplans);
  }
);

module.exports = router;
