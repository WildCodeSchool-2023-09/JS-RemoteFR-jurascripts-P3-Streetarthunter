const AbstractManager = require("./AbstractManager");

class LocationManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "item" as configuration
    super({ table: "locations" });
  }

  async create(location) {
    // Execute the SQL SELECT query to retrieve all items from the "item" table
    const [result] = await this.database.query(
      `insert into ${this.table} (city, country, post_code, street, street_number, latitude, longitude) values (?,?,?,?,?,?,?)`,
      [
        location.city,
        location.country,
        location.post_code,
        location.street,
        location.street_number,
        location.latitude,
        location.longitude,
      ]
    );

    // Return the ID of the newly inserted item
    return result.insertId;
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all items from the "item" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of items
    return rows;
  }

  async read(id) {
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the item
    return rows[0];
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing item

  async update(id, location) {
    const [result] = await this.database.query(
      `update ${this.table} set city = ?, country = ?, post_code = ?, street = ?, street_number = ?, latitude = ?, longitude = ? where id = ?`,
      [
        location.city,
        location.country,
        location.post_code,
        location.street,
        location.street_number,
        location.latitude,
        location.longitude,
        id,
      ]
    );

    // Return the ID of the newly inserted item
    return result.insertId;
  }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an item by its ID

  async delete(id) {
    const [rows] = await this.database.query(
      `delete from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the item
    return rows[0];
  }
}

module.exports = LocationManager;
