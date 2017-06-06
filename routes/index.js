var express = require('express');
var router = express.Router();
var request = require('request');
var cheerio = require('cheerio');

/* GET home page. */
router.get('/', function (req, res, next) {
  // request('https://movie.douban.com', function (error, response, body) {
  //   if (!error && response.statusCode == 200) {
  //     var $ = cheerio.load(body, { decodeEntities: false });
  //     var screenAddressList = $('.ui-slide-item .title a');
  //     var fileDataList = [];
  //     for (var i = 0; i < screenAddressList.length; i++) {
  //       var fileUrl = screenAddressList[i].attribs.href;
  //       request(screenAddressList[i].attribs.href, function (error, response, body) {
  //         var obj = {};
  //         var $ = cheerio.load(body, { decodeEntities: false });
  //         obj.fileUrl = fileUrl;
  //         obj.fileName = $("span[property='v:itemreviewed']").text();
  //         obj.releaseDate = $("span[property='v:initialReleaseDate']").text();
  //         obj.commentCount = $("span[property='v:votes']").text();
  //         obj.score = $("strong[property='v:average']").text();
  //         obj.directedBy = $("a[rel='v:directedBy']").text();
  //         obj.stars5 = $(".stars5").siblings(".rating_per").text();
  //         obj.stars4 = $(".stars4").siblings(".rating_per").text();
  //         obj.stars3 = $(".stars3").siblings(".rating_per").text();
  //         obj.stars2 = $(".stars2").siblings(".rating_per").text();
  //         obj.stars1 = $(".stars1").siblings(".rating_per").text();
  //         obj.needDeep = $(".rating_people").text();
  //         fileDataList.push(obj);
  //         console.log(obj);
  //       });
  //     }
  //   } else {
  //     res.send('请求错误');
  //   }
  // })
  res.send('ok');
});

module.exports = router;
