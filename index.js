require("dotenv").config();
const authRouter = require("./routers/authRouter");
const postRouter = require("./routers/postRouter");
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");

const app = express();

// Middleware
app.use(cors());
app.use(helmet());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

app.use('/api/auth', authRouter);
app.use('/api/posts', postRouter);
app.use(express.urlencoded({ extended: true }));


// Test Route
app.get("/", (req, res) => {
  res.json({ message: "Hello World!" });
});

// Start Server
app.listen(process.env.PORT, () => {
  console.log(`🚀 Server running on port ${process.env.PORT}`);
});
