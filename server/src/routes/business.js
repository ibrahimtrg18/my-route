const express = require("express");
const jwt = require("jsonwebtoken");
const validator = require("validator");
const db = require("../config/database");
const router = express.Router();
const { isAuth } = require("../middleware/auth");

router.post("/register", async (req, res) => {
  const { businessName, email, password, phoneNumber } = req.body;

  try {
    const emailValid = await validator.isEmail(email);
    if (emailValid) {
      const isEmailExist = await db("business").where(
        "email",
        email.toLowerCase()
      );
      if (isEmailExist.length === 0) {
        const id = await db("business").insert({
          name: businessName,
          email: email.toLowerCase(),
          password,
          phone_number: phoneNumber,
        });
        return res.status(201).json({
          code: res.statusCode,
          success: true,
          message: "successfully created account",
        });
      } else {
        return res.status(409).json({
          code: res.statusCode,
          success: false,
          message: "email already exist!",
        });
      }
    } else {
      return res.status(406).json({
        code: res.statusCode,
        success: false,
        message: "email field must be an email",
      });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      code: res.statusCode,
      success: true,
      message: err,
    });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const rows = await db
    .select()
    .from("business")
    .where({ email: email.toLowerCase() });

  if (rows.length > 0) {
    if (rows[0].password == password) {
      const token = await jwt.sign(
        { payload: rows[0] },
        process.env.ACCESS_TOKEN_SECRET
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
});

router.get("/q", async (req, res) => {
  const id = req.query.id;

  if (!id) {
    const rows = await db.select().from("business");
    return res.status(200).json({ data: rows });
  } else {
    const rows = await db.select().from("business").where({ id });
    return res.status(200).json({ data: rows[0] });
  }
});

router.get("/onprogress", isAuth, async (req, res) => {
  try {
    const rows = await db.select().from("business").where({ id: req.userId });
    return res.status(200).json({ data: rows[0] });
  } catch (err) {
    return res.status(500).send(err);
  }
});

router.get("/history", isAuth, async (req, res) => {});

router.get("/employee", isAuth, async (req, res) => {
  const businessId = req.userId;

  try {
    const rowsEmployeesId = await db
      .select("employee_id")
      .from("business_employee")
      .where({ business_id: businessId });
    const rows = await db
      .select("*")
      .from("employee")
      .whereIn(
        "id",
        rowsEmployeesId.map((employee) => {
          return employee.employee_id;
        })
      );
    return res.json({ data: rows });
  } catch (err) {
    console.log(err);
  }
});

router.post("/employee/register", isAuth, async (req, res) => {
  const { name, customId, email, password, phoneNumber, address } = req.body;
  const businessId = req.userId;

  try {
    const emailValid = await validator.isEmail(email);
    if (emailValid) {
      const isEmailExist = await db("business").where("email", email);
      if (isEmailExist.length === 0) {
        const employeeId = await db("employee").insert({
          name,
          custom_id: customId.toLowerCase(),
          email: email.toLowerCase(),
          password,
          phone_number: phoneNumber,
          address,
        });
        const businessEmployeeId = await db("business_employee").insert({
          business_id: businessId,
          employee_id: employeeId,
        });
        return res.status(201).json({
          code: res.statusCode,
          success: true,
          message: "successfully created account",
        });
      } else {
        return res.status(409).json({
          code: res.statusCode,
          success: false,
          message: "email already exist",
        });
      }
    } else {
      return res.status(406).json({
        code: res.statusCode,
        success: true,
        message: "email field must be an email",
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

module.exports = router;