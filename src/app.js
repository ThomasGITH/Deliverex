const express = require("express");
const path = require("path");

// Load environment variables
require("dotenv").config();

// Constants
const PORT = process.env.NODE_ENV === "development" ? 3000 : 80;

// Init express
const app = express();

// Set view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views/pages"));

// Serve public files
app.use(express.static(path.join(__dirname, "../public")));

// Set middleware
app.use(express.json());

// Set routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/dashboard", require("./routes/dashboard"));
app.use("/", require("./routes/tracker"));

// Start server
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));    