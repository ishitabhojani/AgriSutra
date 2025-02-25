// const express = require("express");
// const cors = require("cors");
// const bodyParser = require("body-parser");
// require("dotenv").config();

// // Import Routes
// const authRoutes = require("./routes/auth");
// const schemeRoutes = require("./routes/schemes");
// const equipmentRoutes = require("./routes/equipment");

// const app = express();

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());
// app.use("/api/auth", authRoutes);
// app.use("/api/schemes", schemeRoutes);
// app.use("/api/equipment", equipmentRoutes);

// // Server Listening
// const PORT = process.env.PORT || 3001;
// app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/auth");
const schemeRoutes = require("./routes/schemes");
const equipmentRoutes = require("./routes/equipment");
const marketTrendsRoute = require('./routes/marketTrends');
const newsRoutes = require('./routes/news');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// ✅ Use Auth Routes
app.use("/api/auth", authRoutes);
app.use("/api/schemes", schemeRoutes);
app.use("/api/equipment", equipmentRoutes);
app.use('/api/market-trends', marketTrendsRoute);
app.use('/api/news', newsRoutes);

// ✅ PostgreSQL Database Connection
const { Pool } = require("pg");
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: process.env.NODE_ENV === "production" ?
        { rejectUnauthorized: false } :
        false,
});

// ✅ Start the Server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`✅ Server running on port ${PORT}`);
});