/********************** coupon model *******************************/
const schemas = require("../schemas/main_schema");

//store coupon details
exports.storeCouponData = async (req, res, next) => {
  try {
    const {
      couponCode,
      couponValue,
      couponPercentage,
      subscriptionPlanNo,
      issuedTo,
      vendorId_customerId,
    } = req.body;

    const newCouponDetails = new schemas.coupon({
      couponCode,
      couponValue,
      couponPercentage,
      subscriptionPlanNo,
      issuedTo,
      vendorId_customerId,
    });

    const result = await newCouponDetails.save();

    //successfully values stored in database
    if (result) {
      next();
    }
  } catch (err) {
    res.status(500).send(`Internal Server Error : ${err}`);
  }
};

//get coupondetails
exports.getCouponCodes = async (req, res, next) => {
  try {
    const { couponType, couponCode } = req.query;

    //query to verify couponCode
    const result = await schemas.coupon.aggregate([
      {
        /**
         * query: The query in MQL.
         */
        $match: {
          couponCode: {
            $regex: new RegExp(`^${couponType}`),
            $eq: couponCode,
          },
          expiryDate: {
            $gte: new Date(),
          },
        },
      },
      {
        /**
         * from: The target collection.
         * localField: The local join field.
         * foreignField: The target join field.
         * as: The name for the results.
         */
        $lookup: {
          from: `subscription_plans`,
          localField: "subscriptionPlanNo",
          foreignField: "subscriptionPlanNo",
          as: "offerData",
        },
      },
      {
        $unwind: "$offerData",
      },
      {
        /**
         * from: The target collection.
         * localField: The local join field.
         * foreignField: The target join field.
         * as: The name for the results.
         */
        $lookup: {
          from: "product",
          localField: "productID",
          foreignField: "productID",
          as: "result",
        },
      },
      {
        /**
         * specifications: The fields to
         *   include or exclude.
         */
        $project: {
          _id: 1,
          couponCode: 1,
          subscriptionPlanNo: 1,
          expiryDate: 1,
          isUsed: 1,
          "offerData.edition": 1,
          "offerData.productName": 1,
          "offerData.offerPrice": {
            $subtract: ["$offerData.offerPrice", "$couponValue"],
          },
          "offerData.productID": 1,
        },
      },
    ]);

    //on success
    if (result) {
      res.locals.validCouponCode = result;
      next();
    }
  } catch (err) {
    res.status(500).send(`Internal Server Error : ${err}`);
  }
};

//update couponCode
exports.updateCouponCode = async (req, res, next) => {
  try {
    //get couponCode from URL
    const { couponCode } = req.body;

    //update isUsed=1 based on couponCode
    const result = await schemas.coupon.updateOne(
      { couponCode },
      { $set: { isUsed: "1" } }
    );

    //successfully values stored in database
    if (result.nModified === 1) {
      next();
    }
  } catch (err) {
    res.status(500).send(`Internal Server Error : ${err}`);
  }
};
