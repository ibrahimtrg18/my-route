const express = require("express");
const jwt = require("jsonwebtoken");
const db = require("../config/database");
const router = express.Router();
const { isAuthEmployee } = require("../middleware/auth");

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const rows = await db
      .select()
      .from("employee")
      .where({ email: email.toLowerCase() });

    if (rows.length > 0) {
      if (rows[0].password == password) {
        rows[0].roles = "employee";
        const token = jwt.sign(
          { payload: rows[0] },
          process.env.ACCESS_TOKEN_SECRET,
          { expiresIn: "7d" }
        );

        return res.status(200).json({
          code: res.statusCode,
          success: true,
          data: {
            accessToken: token,
          },
          message: "Successfully login!",
        });
      } else {
        return res.status(401).json({
          code: res.statusCode,
          success: false,
          message: "Password incorrect!, please try again...",
        });
      }
    } else {
      return res.status(401).json({
        code: res.statusCode,
        success: false,
        message: "This email does not exist!",
      });
    }
  } catch (err) {
    return res.status(500).json({
      code: res.statusCode,
      success: false,
      message: err,
    });
  }
});

router.get("/profile", isAuthEmployee, async (req, res) => {
  const employeeId = req.userId;

  try {
    const rows = await db
      .select("*")
      .from("employee")
      .where({ id: employeeId });
    return res.status(200).json({
      code: res.statusCode,
      success: true,
      data: {
        employee: rows[0],
      },
      message: "found the account",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      code: res.statusCode,
      success: false,
      message: err,
    });
  }
});

router.put("/profile", isAuthEmployee, async (req, res) => {
  const employeeId = req.userId;
  const { name, phoneNumber, address } = req.body;

  try {
    await db("employee")
      .update({ name, phone_number: phoneNumber, address })
      .where({ id: employeeId });
    return res.status(200).json({
      code: res.statusCode,
      success: true,
      message: "successfully update profile",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      code: res.statusCode,
      success: false,
      message: err,
    });
  }
});

router.get("/status", isAuthEmployee, async (req, res) => {
  const employeeId = req.userId;

  try {
    const employeeStatus = await db
      .select("status")
      .from("employee")
      .where({ id: employeeId });

    return res.status(200).json({
      code: res.statusCode,
      success: true,
      data: {
        employee: employeeStatus[0],
      },
    });
  } catch (err) {
    return res.status(500).json({
      code: res.statusCode,
      success: false,
      message: err,
    });
  }
});

router.patch("/status", isAuthEmployee, async (req, res) => {
  const employeeId = req.userId;

  try {
    const employeeStatus = await db
      .select("status")
      .from("employee")
      .where({ id: employeeId });

    await db("employee")
      .update({ status: !employeeStatus[0].status })
      .where({ id: employeeId });

    return res.status(200).json({
      code: res.statusCode,
      success: true,
      message: `successfully change the status to ${
        !employeeStatus[0].status ? "on way" : "standby"
      }`,
    });
  } catch (err) {
    return res.status(500).json({
      code: res.statusCode,
      success: false,
      message: err,
    });
  }
});

module.exports = router;
