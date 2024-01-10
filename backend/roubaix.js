/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
require("dotenv").config();
const fs = require("fs");
const { faker } = require("@faker-js/faker");
const database = require("./database/client");

const roubaix = async () => {
  try {
    // Read the JSON file
    const jsonData = fs.readFileSync(
      "./database/street_art_roubaix.json",
      "utf8"
    );
    const artworksData = JSON.parse(jsonData);

    // Declare an array to store the query promises
    const queries = [];

    // Optional: Truncate tables (remove existing data)
    await database.query("DELETE FROM capture");
    await database.query("DELETE FROM user_badges");
    await database.query("DELETE FROM badges");
    await database.query("DELETE FROM artworks");
    await database.query("DELETE FROM locations");
    await database.query("DELETE FROM artists");
    await database.query("DELETE FROM users");

    // Insert data into the 'users' table
    const userQueries = Array.from({ length: 50 }, () =>
      database.query(
        "INSERT INTO users(firstname, lastname, pseudo, email, hashed_password, avatar, ranking, points, is_administrator) VALUES (?,?,?,?,?,?,?,?,?)",
        [
          faker.person.firstName(),
          faker.person.lastName(),
          faker.lorem.word(),
          faker.internet.email(),
          faker.internet.password(),
          faker.image.urlLoremFlickr({ category: "streetart" }),
          faker.number.int({ min: 1, max: 500 }),
          faker.number.int({ min: 1, max: 10000 }),
          false,
        ]
      )
    );
    queries.push(...userQueries);

    // Insert data into the 'artists' table
    const artistQueries = artworksData.map((artistData) =>
      database.query(
        "INSERT INTO artists(name, bio, portrait) VALUES (?, ?, ?)",
        [artistData.name, artistData.bio, artistData.picture]
      )
    );
    queries.push(...artistQueries);

    // Insert data into the 'locations' table
    const locationQueries = artworksData.map((locationData) =>
      database.query(
        "INSERT INTO locations(city, country, post_code, street, street_number, latitude, longitude) VALUES (?,?,?,?,?,?,?)",
        [
          locationData.city,
          "France",
          locationData.post_code,
          locationData.street,
          locationData.street_number || faker.number.int({ min: 1, max: 3 }),
          locationData.latitude,
          locationData.longitude,
        ]
      )
    );
    queries.push(...locationQueries);

    // Insert data into the 'artworks' table
    const artworkQueries = artworksData.map(async (artworkData) => {
      // Insert the artist data first to get the artist ID
      const [artistResult] = await database.query(
        "INSERT INTO artists(name, bio, portrait) VALUES (?, ?, ?)",
        [artworkData.name, artworkData.bio, artworkData.picture]
      );

      // Insert the user data
      const [userResult] = await database.query(
        "INSERT INTO users(firstname, lastname, pseudo, email, hashed_password, avatar, ranking, points, is_administrator) VALUES (?,?,?,?,?,?,?,?,?)",
        [
          faker.person.firstName(),
          faker.person.lastName(),
          faker.lorem.word(),
          faker.internet.email(),
          faker.internet.password(),
          faker.image.urlLoremFlickr({ category: "streetart" }),
          faker.number.int({ min: 1, max: 500 }),
          faker.number.int({ min: 1, max: 10000 }),
          false,
        ]
      );

      // Insert the location data
      const [locationResult] = await database.query(
        "INSERT INTO locations(city, country, post_code, street, street_number, latitude, longitude) VALUES (?,?,?,?,?,?,?)",
        [
          artworkData.city,
          "France",
          artworkData.post_code,
          artworkData.street,
          artworkData.street_number || faker.number.int({ min: 1, max: 3 }),
          artworkData.latitude,
          artworkData.longitude,
        ]
      );

      // Insert the artwork data
      const [artworkResult] = await database.query(
        "INSERT INTO artworks(title, picture, description, artist_id, user_id, general_gallery, reported, location_id) VALUES (?,?,?,?,?,?,?,?)",
        [
          artworkData.title,
          artworkData.picture,
          artworkData.description,
          artistResult.insertId,
          userResult.insertId,
          true,
          false,
          locationResult.insertId,
        ]
      );

      return artworkResult;
    });

    queries.push(...artworkQueries);

    // Insert data into the 'badges' table
    const badgeQueries = Array.from({ length: 10 }, () =>
      database.query(
        "INSERT INTO badges(picture, name, infos, min_points) VALUES (?,?,?,?)",
        [
          faker.image.urlLoremFlickr({ category: "animals" }),
          faker.lorem.words(),
          faker.lorem.sentence(),
          faker.number.int({ min: 1, max: 10000 }),
        ]
      )
    );
    queries.push(...badgeQueries);

    // Wait for all the insertion queries to complete
    await Promise.all(queries);

    // Close the database connection
    database.end();

    console.info(`${database.databaseName} filled from ${__filename} 🍺`);
  } catch (err) {
    console.error("Error filling the database:", err.message);
  }
};

// Run the seed function
roubaix();
