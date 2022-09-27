const { Users } = require('../models');

const usersData = [
  {
    username: 'Leo',
    email: 'leo@gmail.com',
    password: 'leoiscool',
  },
  {
    username: 'Vaughn',
    email: 'vaughn@gmail.com',
    password: 'vaughniscool',
  },
  {
    username: 'Jason',
    email: 'jason@gmail.com',
    password: 'jasoniscool',
  },
  {
    username: 'Mike',
    email: 'mike@gmail.com',
    password: 'mikeiscool',
  },
];

const seedUsers = () => Users.bulkCreate(usersData);

module.exports = seedUsers;
