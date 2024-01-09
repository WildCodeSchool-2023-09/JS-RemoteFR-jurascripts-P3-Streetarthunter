const AbstractManager = require("./AbstractManager");

class ArtistManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "artists" as configuration
    super({ table: "artists" });
  }

  // The C of CRUD - Create operation
  async create(artist) {
    // Execute the SQL INSERT query to add a new artist to the "artists" table
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (name, bio, portrait) VALUES (?, ?, ?)`,
      [artist.name, artist.bio, artist.portrait]
    );

    // Return the ID of the newly inserted artist
    return result.insertId;
  }

  // The Rs of CRUD - Read operations
  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific artist by their ID
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the artist
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all artists from the "artists" table
    const [rows] = await this.database.query(`SELECT * FROM ${this.table}`);

    // Return the array of artists
    return rows;
  }

  // The U of CRUD - Update operation
  async update(id, artist) {
    // Execute the SQL UPDATE query to modify an existing artist
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET name = ?, bio = ?, portrait = ? WHERE id = ?`,
      [artist.name, artist.bio, artist.portrait, id]
    );

    // Return true if the update was successful, false otherwise
    return result.affectedRows > 0;
  }

  // The D of CRUD - Delete operation
  async delete(id) {
    // Execute the SQL DELETE query to remove an artist by their ID
    const [result] = await this.database.query(
      `DELETE FROM ${this.table} WHERE id = ?`,
      [id]
    );

    // Return true if the deletion was successful, false otherwise
    return result.affectedRows > 0;
  }
}

module.exports = ArtistManager;
