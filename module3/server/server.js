const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/auth");
const schemeRoutes = require("./routes/schemes");
const equipmentRoutes = require("./routes/equipment");
const marketTrendsRoute = require('./routes/marketTrends');
const newsRoutes = require('./routes/news');
const profileRoute = require('./routes/profile');
const seedRoutes = require('./routes/seeds');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(cors({ origin: "http://localhost:3000" }));

// Use Auth Routes
app.use("/api/auth", authRoutes);
app.use("/api/schemes", schemeRoutes);
app.use("/api/equipment", equipmentRoutes);
app.use('/api/market-trends', marketTrendsRoute);
app.use('/api/news', newsRoutes);
app.use('/api/profile', profileRoute);
app.use('/',seedRoutes);

// PostgreSQL Database Connection
const { Pool } = require("pg");
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: process.env.NODE_ENV === "production" ?
        { rejectUnauthorized: false } :
        false,
});

// Start the Server
const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});