DROP DATABASE IF EXISTS twitter_db;

CREATE DATABASE twitter_db;

USE twitter_db;

CREATE TABLE tweets (
    id INT PRIMARY KEY AUTO_INCREMENET, 
    tweet_id BIGINT NOT NULL, 
    tweet_text VARCHAR(160) NOT NULL, 
    screen_name VARCHAR(160) NOT NULL, 
    author_id BIGINT,
    created_at DATETIME NOT NULL,
    inserted_at DATETIME NOT NULL
);