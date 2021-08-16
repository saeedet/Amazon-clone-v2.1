const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51JJS7XJXYb1z3O5DoGQ5HLv1C4WE77Q3QAK4MkGm8K1X7GiBe4ta18Pn69SmSLB8EX63g5Dhy3PBctnAaszQ4BHk00b2nGZ834"
);

// API

// App config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get("/", (request, response) => {
  response.status(200).send("hello world");
});

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("payment req received >>>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  // OK - created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listen command
exports.api = functions.https.onRequest(app);
