const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

// Load environment variables from .env file
dotenv.config();

const stripe = require("stripe")(process.env.STRIPE_KEY);

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Success!",
  });
});

// POST route to handle payment creation
app.post("/payment/create", async (req, res) => {
  const total = parseInt(req.query.total);

  // Check if total is valid
  if (total && total > 0) {
    console.log("Payment received", total);
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total,
      currency: "usd",
    });
    // Respond with the payment total
    res.status(201).json({
      clientSecret: paymentIntent.client_secret,
    });
  } else {
    //If total is invalid, return an error response
    res.status(401).json({ error: "total must be greater than 0" });
  }
});

// Export your API as a Firebase Function
exports.api = onRequest(app);
