const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "user" as configuration
    super({ table: "users" });
  }

  // The C of CRUD - Create operation

  async create(user) {
    // Execute the SQL INSERT query to add a new user to the "users" table
    const [result] = await this.database.query(
      `insert into ${this.table} (firstName, lastName, pseudo, email, hashed_password, avatar, ranking, points, is_administrator) values (?,?,?,?,?,?,?,?,?)`,
      [
        user.firstname,
        user.lastname,
        user.pseudo,
        user.email,
        user.hashedPassword,
        user.avatar,
        user.ranking,
        user.points,
        user.is_administrator,
      ]
    );

    // Return the ID of the newly inserted user
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific user by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the user
    return rows[0];
  }

  async readByEmailWithPassword(email) {
    // Execute the SQL SELECT query to retrieve a specific user by its email
    const [rows] = await this.database.query(
      `select * from ${this.table} where email = ?`,
      [email]
    );

    // Return the first row of the result, which represents the user
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all items from the "user" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of items
    return rows;
  }

  // The U of CRUD - Update operation

  async update(id, user) {
    const [result] = await this.database.query(
      "UPDATE users SET firstname = ?, lastname = ?, pseudo = ?, email = ?, password = ?, avatar = ?, ranking = ?, points = ?, is_administrator = ? WHERE id = ?",
      [
        user.firstname,
        user.lastname,
        user.pseudo,
        user.email,
        user.password,
        user.avatar,
        user.ranking,
        user.points,
        user.is_administrator,
        id, // Use the 'id' parameter passed to the function
      ]
    );
    return result.affectedRows;
  }

  // The D of CRUD - Delete operation
  async delete(id) {
    // Execute the SQL DELETE query to delete a specific user by its ID
    const [result] = await this.database.query(
      `DELETE FROM ${this.table} WHERE id = ?`,
      [id]
    );
    return result;
  }
}

module.exports = UserManager;
