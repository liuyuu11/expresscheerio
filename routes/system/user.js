var express = require('express');
var router = express.Router();
var UserInfo = require('../../models/user');

//添加用户
router.post('/addUser', function (req, res, next) {
    if (req.body.userName == undefined || req.body.userName == '') {
        res.render('404', {});
        return;
    }
    var userInfo = {
        userName: req.body.userName,
        userPassword: req.body.userPassword
    };
    UserInfo.findAll({
        where: {
            userName: req.body.userName
        }
    }).then(function (msg) {
        console.log(msg.length);
        if (msg.length > 0) {
            res.json({ 'code': 201, 'success': true, 'msg': '账号已存在' });
        } else {
            UserInfo.create(userInfo).then(function (msg) {
                if (!!msg) {
                    res.json({ 'code': 200, 'success': true, 'msg': '增加成功' });
                } else {
                    res.json({ 'code': 400, 'success': false, 'msg': '增加失败' });
                }
            })
        }
    });
});

//验证登陆
router.post('/login', function (req, res, next) {
    if (req.body.userName == undefined || req.body.userName == '') {
        res.render('404', {});
        return;
    }
    UserInfo.findAll({
        where: {
            userName: req.body.userName,
            userPassword: req.body.userPassword
        }
    }).then(function (msg) {
        console.log(msg.length);
        if (msg.length > 0) {
            res.json({ 'code': 200, 'success': true, 'msg': '登陆成功' });
        } else {
            res.json({ 'code': 200, 'success': true, 'msg': '账号或密码不正确' });
        }
    });
});

//修改用户
router.post('/updateUser', function (req, res, next) {
    if (req.body.userName == undefined || req.body.userName == '') {
        res.render('404', {});
        return;
    }
    UserInfo.findAll({
        where: {
            userName: req.body.userName
        }
    }).then(function (msg) {
        if (msg.length > 0) {
            UserInfo.update({
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
            res.json({ 'code': 200, 'success': true, 'msg': '账号不存在' });
        }
    });
});

//退出登陆接口
router.post('/logout', function (req, res, next) {
    if (req.body.msg == undefined || req.body.msg == '') {
        res.render('404', {});
        return;
    }
    if(req.body.msg == "logout"){
        res.json({ 'code': 200, 'success': true, 'msg': '退出成功' });
    }
});

//测试
router.get('/test', function (req, res, next) {
    res.send('ok');
});
module.exports = router;