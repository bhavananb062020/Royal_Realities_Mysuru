const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const contactRoutes = require("./routes/contactRoutes");

const app = express();

app.use(cors({
  origin: [
    "https://royalrealitiesmysuru.in",
    "https://www.royalrealitiesmysuru.in",
    "https://royalrealitiesmysuru.pages.dev"
  ],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
}));

app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("MongoDB Connected"))
.catch(err=>console.log(err));

app.use("/api", contactRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});