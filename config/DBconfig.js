var Sequelize = require('sequelize');
var mysql = require('mysql');
var sequelize = new Sequelize(
      'snoob',
      'root',
      'root',
      {
            'dialect': 'mysql',
            'host': 'localhost',
            'port': 3306
      }
);
module.exports=sequelize;
