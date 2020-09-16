const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { response } = require("express");
const stripe = require("stripe")(
  "sk_test_51HPvqbFpZLR1mBNMx5xTX58coWpl2mLVcf1ErBUGuHaDJQfZDm94zjld1T5Cya3MrcGqE85zvJ7yIIrCeKDXQ6Hw00PcXA8PVp"
);
//API
// App config
const app = express();
// middleware
app.use(cors({ origin: true }));
app.use(express.json());

//API routes
app.get("/", (req, res) => res.status(200).send("hello world"));

app.post("/payments/create", async (req, res) => {
  const total = req.query.total;

  console.log("payment request reveived", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, ///subunits of currency
    currency: "usd",
  });
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
//Listen
exports.api = functions.https.onRequest(app);

/// example endpoint
//http://localhost:5001/e-clone-ceb8c/us-central1/api
