const { Tweets } = require('../models');

const tweetData = [
  {
    text: 'April 20, 2021 07:00:00',
    date: 'June 21, 2021 17:00:00',
    users_id: 1,
  },
  {
    text: 'April 20, 2021 07:00:00',
    date: 'June 21, 2021 17:00:00',
    users_id: 2,
  },
  {
    text: 'April 20, 2021 07:00:00',
    date: 'June 21, 2021 17:00:00',
    users_id: 3,
  },
  {
    text: 'April 20, 2021 07:00:00',
    date: 'June 21, 2021 17:00:00',
    users_id: 1,
  },
];

const seedTweets = () => Tweets.bulkCreate(tweetData);

module.exports = seedTweets;
