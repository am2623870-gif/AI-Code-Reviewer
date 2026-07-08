const express = require("express");

const router = express.Router();

const {
  reviewCode,
} = require("../controllers/reviewController");

/*
Supported modes:

Review
Explain
Optimize
Debug
Security
Refactor
Tests
Documentation

All are handled by one endpoint.
*/

router.post("/review", reviewCode);

module.exports = router;