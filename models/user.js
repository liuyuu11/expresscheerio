var Sequelize = require('sequelize');
var sequelize = new Sequelize(
    'demo',
    'root',
    'root',
    {
        'dialect': 'mysql',
        'host': 'localhost',
        'port': 3306
    }
);

//定义表的数据模型
var UserInfo = sequelize.define('userInfo', {
    userId: {//自增长id，主键，整型
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    userName: {
        type: Sequelize.STRING(30)
    },
    userPassword: {
        type: Sequelize.STRING(30)
    }
}, {
        tableName:'userInfo'
    });

module.exports = UserInfo;