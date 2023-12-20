/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

// Load environment variables from .env file
require("dotenv").config();

// Import Faker library for generating fake data
const { faker } = require("@faker-js/faker");

// Import database client
const database = require("./database/client");

const seed = async () => {
  try {
    // Declare an array to store the query promises
    // See why here: https://eslint.org/docs/latest/rules/no-await-in-loop
    const queries = [];

    /* ************************************************************************* */

    // Generating Seed Data

    // Optional: Truncate tables (remove existing data)
    await database.query("truncate users");

    // Insert fake data into the 'users' table
    for (let i = 0; i < 10; i += 1) {
      queries.push(
        database.query(
          "insert into users(firstname, lastname, pseudo, email, password, avatar, ranking, points, is_administrator) values (?,?,?,?,?,?,?,?,?)",
          [
            faker.person.firstName(),
            faker.person.lastName(),
            faker.lorem.word(),
            faker.internet.email(),
            faker.internet.password(),
            faker.image.urlLoremFlickr({ category: "animals" }),
            faker.number.int({ min: 1, max: 500 }),
            faker.number.int({ min: 1, max: 10000 }),
            faker.number.binary(),
          ]
        )
      );
    }

    /* ************************************************************************* */

    // Wait for all the insertion queries to complete
    await Promise.all(queries);

    // Close the database connection
    database.end();

    console.info(`${database.databaseName} filled from ${__filename} 🌱`);
  } catch (err) {
    console.error("Error filling the database:", err.message);
  }
};

// Run the seed function
seed();
