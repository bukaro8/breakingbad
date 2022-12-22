const sequelize = require('sequelize');
const { Datatypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('occupation', {
    name: {
      type: Datatypes.STRING,
      allowNull: false,
    },
  });
};
