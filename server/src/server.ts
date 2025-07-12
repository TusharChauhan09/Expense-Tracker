import express from "express";
import dotenv from "dotenv";

import client from "./lib/db";

dotenv.config();

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3001;

app.post("/api/transactions", async (req, res) => {
  try {
    const { title , amount, user_id} = req.body();
  } catch (error) {}
});

app.listen(PORT, () => {
  console.log(`Server is running on port : ${PORT}`);
});
