/********************** subscription Plan model *******************************/
const schemas = require("../schemas/main_schema");

//get all subscriptionplan details from database
exports.getSubscriptionPlanData = async (req, res, next) => {
  try {
    const result = await schemas.subscription_plan.find({});
    res.locals.subscriptionplans = result;
    next();
  } catch (err) {
    res.status(500).send(`Internal Server Error : ${err}`);
  }
};
