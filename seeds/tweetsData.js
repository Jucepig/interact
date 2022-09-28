const { Tweets } = require('../models');

const tweetsData = [
  {
    text: 'Hello World',
    date: 'June 21, 2021 17:00:00',
    users_id: 1,
  },
  {
    text: 'Twitter bots are awesome',
    date: 'June 22, 2021 17:00:00',
    users_id: 2,
  },
  {
    text: 'Lets go Chargers!',
    date: 'June 23, 2021 17:00:00',
    users_id: 3,
  },
  {
    text: 'Just some random tweet text',
    date: 'June 24, 2021 17:00:00',
    users_id: 4,
  },
];

const seedTweets = () => Tweets.bulkCreate(tweetsData);

module.exports = seedTweets;
