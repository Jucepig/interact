const sequelize = require('../config/connection');
const seedTweets = require('./tweetData');
const seedUsers = require('./usersData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedTweets();

  await seedUsers();

  process.exit(0);
};

seedAll();
