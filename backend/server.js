const express = require("express");
const cors = require("cors");
require("dotenv").config();

const reviewRoutes = require("./routes/reviewRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("🚀 AI Code Reviewer Backend Running");
});

app.use("/api", reviewRoutes);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});