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

router.get("/destination", isAuthEmployee, async (req, res) => {
  const employeeId = req.userId;

  try {
    const routeId = await db
      .select("id")
      .from("route")
      .where({ employee_id: employeeId });
    const destinationsId = await db
      .select("destination_id")
      .from("route_destination")
      .where({ route_id: routeId[0].id });
    const destinations = await db
      .select("*")
      .from("destination")
      .whereIn(
        "id",
        destinationsId.map((dest) => dest.destination_id)
      );
    return res.status(200).json({
      code: res.statusCode,
      success: true,
      data: {
        destination: destinations,
      },
      message: `found ${destinations.length}`,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send(err);
  }
});

router.put(
  "/destination/:destinationId/finish",
  isAuthEmployee,
  async (req, res) => {
    const employeeId = req.userId;
    const { destinationId } = req.params;

    try {
      const routeId = await db
        .select("id")
        .from("route")
        .where({ employee_id: employeeId });

      const destinationsId = await db
        .select("destination_id")
        .from("route_destination")
        .where({ route_id: routeId[0].id });

      const pass = destinationsId.find((dest) => {
        return dest.destination_id == destinationId;
      });

      if (pass) {
        await db("destination")
          .where({ id: destinationId })
          .update({ status: 1 });

        const destinationStatus = await db
          .select("status")
          .from("destination")
          .whereIn(
            "id",
            destinationsId.map((dest) => dest.destination_id)
          );

        const alldone = destinationStatus.find((dest) => dest.status == 0);

        if (!alldone) {
          await db("route")
            .where({ employee_id: employeeId })
            .update({ status: 1 });

          await db("employee").where({ id: employeeId }).update({ status: 0 });
        }

        return res.status(200).json({
          code: req.statusCode,
          success: true,
          message: "successfully change status destination",
        });
      } else {
        return res.status(403).json({
          code: req.statusCode,
          success: false,
          message: "its not your destination",
        });
      }
    } catch (err) {
      console.log(err);
      return res.status(500).send(err);
    }
  }
);

module.exports = router;
