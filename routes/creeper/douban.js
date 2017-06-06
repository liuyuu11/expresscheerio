var express = require('express');
var router = express.Router();
var douban = require('../../core/creeper/douban').douban;
module.exports = router;

router.get('/hotFileData',douban.getHotFileData,function(req,res){
    //var obj={"success":"ok"}
    res.json(req.body.fileDataList); 
})