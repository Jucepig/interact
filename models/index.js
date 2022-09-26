const Users = require('./Users');
const Tweets = require('./Tweets');

Users.hasMany(Tweets, {
  foreignKey: 'users_id',
});

Tweets.belongsTo(Users);

module.exports = { Users, Tweets };
