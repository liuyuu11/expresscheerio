var express = require('express');
var router = express.Router();
var User = require('../../models/user');

//验证登陆
router.post('/login', function (req, res, next) {
    if (req.body.userName == undefined || req.body.userName == '' || req.body.userPassword == undefined || req.body.userPassword == '') {
        res.json({ 'code': 401, 'success': false, 'msg': '账号或密码为空' });
        return;
    }
    User.findAll({
        where: {
            userName: req.body.userName,
            userPassword: req.body.userPassword
        }
    }).then(function (msg) {
        console.log(msg.length);
        if (msg.length > 0) {
            res.json({ 'code': 200, 'success': true, 'msg': '登陆成功' });
        } else {
            res.json({ 'code': 400, 'success': false, 'msg': '账号或密码不正确' });
        }
    }).catch(function (err) {
        console.log(err);
    });
});

//添加用户
router.post('/addUser', function (req, res, next) {
    if (req.body.userName == undefined || req.body.userName == '') {
        res.json({ 'code': 401, 'success': false, 'msg': '账号或密码为空' });
        return;
    }
    var userInfo = {
        'userName': req.body.userName,
        'userPassword': req.body.userPassword,
        'userNick': req.body.userNick,
        'userPhone': req.body.userPhone,
        'userEmail': req.body.userEmail,
        'createdAt': new Date(),
        'updatedAt': new Date()
    };
    User.findAll({
        where: {
            userName: req.body.userName
        }
    }).then(function (msg) {
        console.log(userInfo);
        if (msg.length > 0) {
            res.json({ 'code': 204, 'success': false, 'msg': '账号已存在' });
        } else {
            User.create(userInfo).then(function (msg) {
                if (!!msg) {
                    res.json({ 'code': 200, 'success': true, 'msg': '增加成功' });
                } else {
                    res.json({ 'code': 400, 'success': false, 'msg': '增加失败' });
                }
            })
        }
    }).catch(function (err) {
        console.log(err);
    });
});

//修改用户资料
router.post('/updateUserInfo', function (req, res, next) {
    if (req.body.userName == undefined || req.body.userName == '') {
        res.json({ 'code': 401, 'success': false, 'msg': '账号或密码为空' });
        return;
    }
    User.findAll({
        where: {
            userName: req.body.userName
        }
    }).then(function (msg) {
        if (msg.length > 0) {
            User.update({
                'userNick': req.body.userNick,
                'userPhone': req.body.userPhone,
                'userEmail': req.body.userEmail,
                'updatedAt': new Date()
            }, {
                    where: {
                        userName: req.body.userName
                    }
                }).then(function (msg) {
                    if (msg.length > 0) {
                        res.json({ 'code': 200, 'success': true, 'msg': '修改资料成功' });
                    } else {
                        res.json({ 'code': 400, 'success': false, 'msg': '修改资料失败' });
                    }
                })
        } else {
            res.json({ 'code': 402, 'success': false, 'msg': '账号不存在' });
        }
    });
});

//修改用户资料
router.post('/updateUserPassword', function (req, res, next) {
    if (req.body.userName == undefined || req.body.userName == '') {
        res.json({ 'code': 401, 'success': false, 'msg': '账号或密码为空' });
        return;
    }
    User.findAll({
        where: {
            userName: req.body.userName
        }
    }).then(function (msg) {
        if (msg.length > 0) {
            User.update({
                'userPassword': req.body.userPassword
            }, {
                    where: {
                        userName: req.body.userName
                    }
                }).then(function (msg) {
                    if (msg.length > 0) {
                        res.json({ 'code': 200, 'success': true, 'msg': '修改密码成功' });
                    } else {
                        res.json({ 'code': 200, 'success': false, 'msg': '修改密码失败' });
                    }
                })
        } else {
            res.json({ 'code': 402, 'success': false, 'msg': '账号不存在' });
        }
    });
});

//测试
router.get('/test', function (req, res, next) {
    console.log(new Date());
    console.log(new Date().toLocaleString());
    res.send('ok');
});

module.exports = router;