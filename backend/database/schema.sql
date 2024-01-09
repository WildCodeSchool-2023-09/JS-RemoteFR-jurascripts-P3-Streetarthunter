DROP TABLE IF EXISTS capture;
DROP TABLE IF EXISTS user_badges;
DROP TABLE IF EXISTS badges;
DROP TABLE IF EXISTS artworks;
DROP TABLE IF EXISTS locations;
DROP TABLE IF EXISTS artists;
DROP TABLE IF EXISTS users;

create table users (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  firstname VARCHAR(80) NOT NULL,
  lastname VARCHAR(80) NOT NULL,
  pseudo VARCHAR(80) NOT NULL,
  email VARCHAR(255) NOT NULL,
  hashed_password VARCHAR(255) NOT NULL,
  avatar VARCHAR(255),
  ranking INT,
  points INT,
  is_administrator BOOLEAN NOT NULL
);

create table artists (
  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  name VARCHAR(255) NOT NULL,
  bio VARCHAR(255),
  portrait VARCHAR(255) NOT NULL
);

create table locations (
  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  city VARCHAR(255) NOT NULL,
  country VARCHAR(255) NOT NULL,
  post_code INT NOT NULL,
  street VARCHAR(255) NOT NULL,
  street_number INT NOT NULL,
  latitude FLOAT NOT NULL,
  longitude FLOAT NOT NULL
);

CREATE TABLE artworks (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  title VARCHAR(255),
  picture VARCHAR(255) NOT NULL,
  description VARCHAR(255) NOT NULL,
  artist_id INT NOT NULL,
  user_id INT NOT NULL,
  general_gallery BOOLEAN NOT NULL,
  reported BOOLEAN NOT NULL,
  location_id INT NOT NULL,
  FOREIGN KEY (artist_id) REFERENCES artists(id) ON UPDATE CASCADE,
  FOREIGN KEY (user_id) REFERENCES users(id) ON UPDATE CASCADE,
  FOREIGN KEY (location_id) REFERENCES locations(id) ON UPDATE CASCADE
);

CREATE TABLE badges (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  picture VARCHAR(255) NOT NULL,
  name VARCHAR(255) NOT NULL,
  infos VARCHAR(255),
  min_points INT NOT NULL
);

CREATE TABLE user_badges (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  user_id INT NOT NULL,
  badge_id INT NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id) ON UPDATE CASCADE,
  FOREIGN KEY (badge_id) REFERENCES badges(id) ON UPDATE CASCADE
);

CREATE TABLE capture (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  user_id INT NOT NULL,
  artwork_id INT NOT NULL,
  capture VARCHAR(255) NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id) ON UPDATE CASCADE,
  FOREIGN KEY (artwork_id) REFERENCES artworks(id) ON UPDATE CASCADE
);






