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

    await database.query("delete from user_badges");
    await database.query("delete from badges");
    await database.query("delete from artworks");
    await database.query("delete from locations");
    await database.query("delete from artists");
    await database.query("delete from users");

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
            faker.image.urlLoremFlickr({ category: "streetart" }),
            faker.number.int({ min: 1, max: 500 }),
            faker.number.int({ min: 1, max: 10000 }),
            faker.number.binary(),
          ]
        )
      );
    }

    for (let i = 0; i < 10; i += 1) {
      queries.push(
        database.query(
          "insert into artists(name, bio, portrait) values (?, ?, ?)",
          [
            faker.person.firstName(),
            faker.lorem.words(),
            faker.image.urlLoremFlickr({ category: "trees" }),
          ]
        )
      );
    }

    for (let i = 0; i < 10; i += 1) {
      queries.push(
        database.query(
          "insert into locations(city, country, post_code, street, street_number, latitude, longitude) values (?,?,?,?,?,?,?)",
          [
            faker.location.city(),
            faker.location.country(),
            faker.number.int({ min: 5, max: 5 }),
            faker.location.street(),
            faker.number.int({ min: 1, max: 3 }),
            faker.location.latitude(),
            faker.location.longitude(),
          ]
        )
      );
    }

    for (let i = 0; i < 10; i += 1) {
      queries.push(
        database.query(
          "insert into artworks(title, picture, description, general_gallery, reported) values (?,?,?,?,?)",
          [
            faker.lorem.words(3),
            faker.image.urlLoremFlickr({ category: "trees" }),
            faker.lorem.sentence(),
            faker.datatype.boolean(),
            faker.datatype.boolean(),
          ]
        )
      );
    }

    // Insert fake data into the 'badges' table
    for (let i = 0; i < 6; i += 1) {
      queries.push(
        database.query(
          "insert into badges(picture, name, infos, min_points) values (?,?,?,?)",
          [
            faker.image.urlLoremFlickr({ category: "animals" }),
            faker.lorem.words(),
            faker.lorem.sentence(),
            faker.number.int({ min: 1, max: 10000 }),
          ]
        )
      );
    }

    // Insert fake data into the 'user_badges' table
    for (let i = 0; i < 20; i += 1) {
      queries.push(
        database.query(
          "insert into user_badges(user_id, badge_id) values (?,?)",
          [
            faker.number.int({ min: 1, max: 10 }),
            faker.number.int({ min: 1, max: 6 }),
          ]
        )
      );
    }

    // Insert fake data into the 'capture' table
    for (let i = 0; i < 10; i += 1) {
      queries.push(
        database.query("insert into capture(capture) values (?)", [
          faker.lorem.word(),
        ])
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
