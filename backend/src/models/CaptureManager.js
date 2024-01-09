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
    const [rows] = await this.database.query(`SELECT * FROM ${this.table}`);
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
