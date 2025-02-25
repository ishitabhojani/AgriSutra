const pool = require("../db");

async function getEquipment(req, res) {
  try {
    const result = await pool.query("SELECT * FROM equipment");
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  getEquipment,
};
