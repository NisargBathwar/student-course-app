const express = require("express");
const router = express.Router();
const Student = require("../models/Student");

// REGISTER
router.post("/register", async (req, res) => {
    const student = new Student(req.body);
    await student.save();
    res.json(student);
});

// LOGIN
router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    const user = await Student.findOne({ email, password });

    if (!user) {
        return res.status(400).json("Invalid credentials");
    }

    res.json(user);
});

module.exports = router;