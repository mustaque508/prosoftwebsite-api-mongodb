/************************* verify jwt token for API **************************/

require("dotenv").config();
const jwt = require("jsonwebtoken");

exports.ensureToken = (req, res, next) => {
  try {
    const token = req.headers["auth-token"];

    if (!token) {
      res.status(401).send(`Access Denied`);
    } else {
      const payload = jwt.verify(token, process.env.JWT_SECRET);
      next();
    }
  } catch (err) {
    res.status(400).send(`Invalid Signature`);
  }
};
