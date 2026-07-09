const express = require("express");
const cors = require("cors");
require("dotenv").config();

const reviewRoutes = require("./routes/reviewRoutes");

const app = express();

/*
=========================================
Security
=========================================
*/

app.disable("x-powered-by");

/*
=========================================
CORS
=========================================
*/

const allowedOrigins = [
  "http://localhost:5173",
  process.env.FRONTEND_URL,
].filter(Boolean);

const corsOptions = {
  origin: function (origin, callback) {
    // Allow requests with no origin (Postman, curl, server-to-server)
    if (!origin) {
      return callback(null, true);
    }

    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    }

    console.log("Blocked by CORS:", origin);

    return callback(new Error("Not allowed by CORS"));
  },
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type"],
  credentials: false,
};

app.use(cors(corsOptions));



/*
=========================================
Middleware
=========================================
*/

app.use(
  express.json({
    limit: "2mb",
  })
);

app.use(
  express.urlencoded({
    extended: true,
  })
);

/*
=========================================
Health Check
=========================================
*/

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "🚀 AI Code Reviewer Backend Running",
    version: "1.0.0",
  });
});

/*
=========================================
Routes
=========================================
*/

app.use("/api", reviewRoutes);

/*
=========================================
404 Handler
=========================================
*/

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

/*
=========================================
Global Error Handler
=========================================
*/

app.use((err, req, res, next) => {
  console.error(err);

  if (err.message === "Not allowed by CORS") {
    return res.status(403).json({
      success: false,
      message: err.message,
    });
  }

  res.status(500).json({
    success: false,
    message: "Internal Server Error",
  });
});

/*
=========================================
Server
=========================================
*/

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log("Allowed Origins:", allowedOrigins);
});