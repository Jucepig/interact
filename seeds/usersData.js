const { Users } = require('../models');

const usersData = [
  {
    username: 'Blossoming Apricot',
    email: 'LedyX',
    password: 'March 30, 2018',
  },
  {
    username: 'Blossoming Apricot',
    email: 'LedyX',
    password: 'March 30, 2018',
  },
  {
    username: 'Blossoming Apricot',
    email: 'LedyX',
    password: 'March 30, 2018',
  },
  {
    username: 'Blossoming Apricot',
    email: 'LedyX',
    password: 'March 30, 2018',
  },
];

const seedUsers = () => Users.bulkCreate(usersData);

module.exports = seedUsers;
