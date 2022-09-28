const sequelize = require('../config/connection');
const seedTweets = require('./tweetsData');
const seedUsers = require('./usersData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUsers();

  await seedTweets();

  process.exit(0);
};

seedAll();
