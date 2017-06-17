var Sequelize= require('sequelize');
var sequelize = require('../config/DBconfig');
//定义表的数据模型
var User = sequelize.define('user', {
    userId: {//自增长id，主键，整型
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    userName: {
        type: Sequelize.STRING(20)
    },
    userPassword: {
        type: Sequelize.STRING(20)
    },
    userNick: {
        type: Sequelize.STRING(20)
    },
    userPhone: {
        type: Sequelize.STRING(20)
    },
    userEmail: {
        type: Sequelize.STRING(20)
    },
    createdAt: {
        type: Sequelize.DATE
    },
    updatedAt: {
        type: Sequelize.DATE
    },
}, {
        freezeTableName: true,
        tableName: 'user',
        timestamps: false
    });

module.exports = User;