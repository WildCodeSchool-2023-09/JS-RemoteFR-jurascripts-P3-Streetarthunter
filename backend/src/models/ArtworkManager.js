const AbstractManager = require("./AbstractManager");

class ArtworkManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "artworks" as configuration
    super({ table: "artworks" });
  }

  // The C of CRUD - Create operation
  async create(artwork) {
    // Execute the SQL INSERT query to add a new artwork to the "artworks" table
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (title, picture, description, artist_id, user_id, general_gallery, reported, location_id) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        artwork.title,
        artwork.picture,
        artwork.description,
        artwork.artist_id,
        artwork.user_id,
        artwork.general_gallery,
        artwork.reported,
        artwork.location_id,
      ]
    );

    // Return the ID of the newly inserted artwork
    return result.insertId;
  }

  // The Rs of CRUD - Read operations
  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific artwork by its ID
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the artwork
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all artworks from the "artworks" table
    const [rows] = await this.database
      .query(`SELECT artworks.*, artists.name AS artist_name, users.pseudo AS user_pseudo
    FROM ${this.table}
    JOIN artists ON artworks.artist_id = artists.id
    JOIN users ON artworks.user_id = users.id`);

    // Return the array of artworks
    return rows;
  }

  // The U of CRUD - Update operation
  async update(id, artwork) {
    // Execute the SQL UPDATE query to modify an existing artwork
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET 
      title = ?, picture = ?, description = ?, artist_id = ?, user_id = ?,
      general_gallery = ?, reported = ?, location_id = ? 
      WHERE id = ?`,
      [
        artwork.title,
        artwork.picture,
        artwork.description,
        artwork.artist_id,
        artwork.user_id,
        artwork.general_gallery,
        artwork.reported,
        artwork.location_id,
        id,
      ]
    );

    // Return true if the update was successful, false otherwise
    return result.affectedRows > 0;
  }

  // The D of CRUD - Delete operation
  async delete(id) {
    // Execute the SQL DELETE query to remove an artwork by its ID
    const [result] = await this.database.query(
      `DELETE FROM ${this.table} WHERE id = ?`,
      [id]
    );

    // Return true if the deletion was successful, false otherwise
    return result.affectedRows > 0;
  }

  async getArtworksByLocationId(locationId) {
    try {
      const [rows] = await this.database.query(
        `SELECT * FROM ${this.table} WHERE location_id = ?`,
        [locationId]
      );

      return rows;
    } catch (error) {
      console.error("Error fetching artworks:", error);
      throw error;
    }
  }
}

module.exports = ArtworkManager;
