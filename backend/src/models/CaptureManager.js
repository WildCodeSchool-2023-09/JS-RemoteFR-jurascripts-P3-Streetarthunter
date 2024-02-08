const AbstractManager = require("./AbstractManager");

class CaptureManager extends AbstractManager {
  constructor() {
    super({ table: "capture" });
  }

  async create(capture) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (user_id, artwork_id, capture) VALUES (?, ?, ?)`,
      [capture.user_id, capture.artwork_id, capture.capture]
    );

    return result.insertId;
  }

  async read(id) {
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE id = ?`,
      [id]
    );

    return rows[0];
  }

  async readAll() {
    const [rows] = await this.database.query(`
    SELECT c.id, c.user_id, c.artwork_id, c.capture, a.picture AS artwork_url, a.reported, u.pseudo AS user_pseudo
    FROM ${this.table} c
    LEFT JOIN artworks a ON c.artwork_id = a.id
    LEFT JOIN users u ON c.user_id = u.id
  `);
    return rows;
  }

  async update(id, capture) {
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET user_id = ?, artwork_id = ?, capture = ? WHERE id = ?`,
      [capture.user_id, capture.artwork_id, capture.capture, id]
    );

    return result.affectedRows > 0;
  }

  async delete(id) {
    const [result] = await this.database.query(
      `DELETE FROM ${this.table} WHERE id = ?`,
      [id]
    );

    return result.affectedRows > 0;
  }
}

module.exports = CaptureManager;
