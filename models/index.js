const Users = require('./Users');
const Tweets = require('./Tweets');

Users.hasMany(Tweets, {
  foreignKey: 'users_id',
  onDelete: 'CASCADE',
});

Tweets.belongsTo(Users, {
  foreignKey: 'users_id',
});

module.exports = { Users, Tweets };
