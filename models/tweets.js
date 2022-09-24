const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Tweets extends Model {}

Tweets.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    
    text: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATETIME,
      allowNull: false
    },
    users_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'users',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'tweets',
  }
);

module.exports = Tweets;
