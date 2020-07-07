const db = require("../config/database");
const jwt = require("jsonwebtoken");

module.exports = {
  isAuth: async (req, res, next) => {
    const token = req.headers["x-token"];
    console.log(token)
    if (!token) {
      return res.status(401).json({
        code: res.statusCode,
        success: false,
        message: "token required",
      });
    }

    try {
      const { payload } = await jwt.verify(
        token,
        process.env.ACCESS_TOKEN_SECRET
      );
      req.userId = payload.id;
    } catch (err) {
      return res.status(403).json({
        code: res.statusCode,
        success: false,
        message: err.message,
      });
    }
    next();
  },
};
