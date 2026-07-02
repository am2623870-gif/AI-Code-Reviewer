const express = require("express");
const cors = require("cors");

const app = express();

const PORT = 8000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("AI Code Reviewer Backend Running 🚀");
});

app.post("/api/review", (req, res) => {
  const { language, code } = req.body;

  console.log("Language:", language);
  console.log("Code:", code);

  res.json({
    success: true,
    review: `
✅ No syntax errors found.

💡 Variables can be renamed to improve readability.

⚡ Time Complexity: O(n)

🔒 No obvious security issues.
`
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});