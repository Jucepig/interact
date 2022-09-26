DROP DATABASE IF EXISTS twitter_db;

CREATE DATABASE twitter_db;

USE twitter_db;

CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENET,
    username VARCHAR(30) NOT NULL,
    password VARCHAR(30) NOT NULL,
    email VARCHAR(160) NOT NULL
);

CREATE TABLE tweets (
    id INT PRIMARY KEY AUTO_INCREMENET,
    users_id INT REFERENCES users(id),  
    text VARCHAR(280) NOT NULL,  
    date DATETIME NOT NULL,
);
