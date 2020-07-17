const express = require("express");
const jwt = require("jsonwebtoken");
const validator = require("validator");
const db = require("../config/database");
const router = express.Router();
const { isAuthBusiness } = require("../middleware/auth");

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
        await db("business").insert({
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
      rows[0].roles = "business";
      const token = await jwt.sign(
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
});

router.get("/settings", isAuthBusiness, async (req, res) => {
  const businessId = req.userId;

  try {
    const rows = await db
      .select("*")
      .from("business")
      .where({ id: businessId });
    return res.status(200).json({
      code: res.statusCode,
      success: true,
      data: {
        business: rows[0],
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

router.put("/settings", isAuthBusiness, async (req, res) => {
  const businessId = req.userId;
  const {
    businessName,
    phoneNumber,
    email,
    newPassword,
    prevPassword,
  } = req.body;

  try {
    const oldPassword = await db
      .select("password")
      .from("business")
      .where({ id: businessId });
    const isEmailInBusiness = await db
      .select("email")
      .from("business")
      .where({ email: email });
    const isEmailInEmployee = await db
      .select("email")
      .from("employee")
      .where({ email: email });
    console.log(isEmailInBusiness.length, isEmailInEmployee.length);
    if (isEmailInBusiness.length <= 1 && isEmailInEmployee.length === 0) {
      if (oldPassword[0].password === prevPassword) {
        await db("business").where({ id: businessId }).update({
          name: businessName,
          phone_number: phoneNumber,
          email,
          password: newPassword,
        });
        return res.status(200).json({
          code: res.statusCode,
          success: true,
          message: "successfully update business",
        });
      } else {
        return res.status(200).json({
          code: res.statusCode,
          success: false,
          message: "wrong previous password",
        });
      }
    } else {
      return res.status(409).json({
        code: res.statusCode,
        successs: false,
        message: "email already exist",
      });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      code: res.statusCode,
      success: false,
      message: err,
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

router.get("/onprogress", isAuthBusiness, async (req, res) => {
  const businessId = req.userId;

  try {
    const rowsEmployeesId = await db
      .select("employee_id")
      .from("business_employee")
      .where({ business_id: businessId });
    const rowsEmployeesOnWay = await db
      .select("*")
      .from("employee")
      .whereIn(
        "id",
        rowsEmployeesId.map((employee) => {
          return employee.employee_id;
        })
      )
      .andWhere({ status: 1 });
    return res.status(200).json({
      code: res.statusCode,
      success: true,
      data: {
        employee: rowsEmployeesOnWay[0],
        message: `Employee onprogress ${rowsEmployeesOnWay.length}`,
      },
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send(err);
  }
});

router.get("/history", isAuthBusiness, async (_req, _res) => {});

router.get("/employee", isAuthBusiness, async (req, res) => {
  const businessId = req.userId;

  try {
    const rowsEmployeesId = await db
      .select("employee_id")
      .from("business_employee")
      .where({ business_id: businessId });
    const rowsEmployees = await db
      .select("*")
      .from("employee")
      .whereIn(
        "id",
        rowsEmployeesId.map((employee) => {
          return employee.employee_id;
        })
      );
    return res.status(200).json({
      code: res.statusCode,
      success: true,
      data: {
        employee: rowsEmployees,
      },
      message: `Found employee ${rowsEmployees.length}`,
    });
  } catch (err) {
    return res.status(500).json({
      code: res.statusCode,
      success: false,
      message: err,
    });
  }
});

router.post("/employee/register", isAuthBusiness, async (req, res) => {
  const { name, customId, email, password, phoneNumber, address } = req.body;
  const businessId = req.userId;

  try {
    const emailValid = await validator.isEmail(email);
    if (emailValid) {
      const isEmailInBusiness = await db
        .select("email")
        .from("business")
        .where({ email: email });
      const isEmailInEmployee = await db
        .select("email")
        .from("employee")
        .where({ email: email });
      if (isEmailInBusiness.length === 0 && isEmailInEmployee.length === 0) {
        const employeeId = await db("employee").insert({
          name,
          custom_id: customId.toLowerCase(),
          email: email.toLowerCase(),
          password,
          phone_number: phoneNumber,
          address,
        });
        await db("business_employee").insert({
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
