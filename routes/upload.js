var express = require('express');
var fs = require('fs');
var router = express.Router();
var color = require('colorful');
var multipart = require('connect-multiparty');
var upload = new multipart();

router.get('/hot_list', function(req, res) {
	var red_path = process.cwd();

	fs.readFile(red_path + '/db_mock/hot_list.html', 'utf8', function(err, data) {
        console.log(color.green('    √ 他们最后列表'));
        console.log(data);
        setTimeout(function() {
            return res.status(200).send(data);
        }, 1000);
    });
});

router.post('/likeStatus', function(req, res) {
	var red_path = process.cwd();

	fs.readFile(red_path + '/db_mock/hot.json', 'utf8', function(err, data) {
        var mock_data = JSON.parse(data);

        console.log(color.green('    √ 获取浏览数量'));
        console.log(data);
        return res.status(200).json(mock_data);
    });
});

router.post('/hotlike', function(req, res) {
    console.log(color.green('    √ 喜欢'));
    return res.status(200).json({
        code: 'success'
    });
});

router.post('/getcolorandsize', function(req, res) {
    console.log(color.green('    √ 获取尺寸颜色'));
    return res.status(200).json({
        code: '0',
        msg: '',
        colorList: ['1', '2'],
        sizeList: ['获取尺寸颜色', 'k','m', 'k','m', 'k','m', 'k','m', 'k','m', 'k','m', 'k','m', 'k','m', 'k','m', 'k']
    });
});

router.post('/getall', function(req, res) {
    console.log(color.green('    √ 一键领取'));
    return res.status(200).json({
      msg: 'FALSE',
      result: {
        "63600": 3,
        "63601": 1
      }
    });
});

router.post('/uploadpic', upload, function(req, res) {
    console.log(color.green('    √ 文件上传'));
    var url = req.files.picture.path.split('public/')[1];
    console.log(url)
    return res.status(200).json({
        url: '/' + url
    });
});

router.post('/uploadfile', upload, function(req, res) {
    console.log(color.green('    √ 文件上传'));
    var _allGoods = [];

    for(var i = 0; i < 2000; i++) {
        _allGoods.push({
            biSort: 30, // bi得分
            manualSortValue: 1, //序号
            manualSortFlag: false, // 是否使用手动排序
            biUpdateTime: '1491318183000', // bi更新时间
            skuid: i, // sku
            name: '商品name', // 商品名称
            imgurl: 'http://cn.vuejs.org/images/logo.png', // 商品图片
            redPrice: 200.12, // 闪购价
            suggestPrice: 200, // 建议闪购价
            promotionStaus: 0, // 促销审核状态
            p: 199.9, // 现价
            state: 1, // sku状态
            isFlashPurchase: 2, // 闪购标
            isHandmade: 1, // 是否手工录入
            lowestPrice: 100, // 30天最低价
            ninetyLowestPrice: 99.9, // 90天最低价
            // isError: false,
            // selected: false,
            error: {
                // 'redPrice': '闪购价高于建议闪购价',
                // 'name': '未填写商品名称'
            }
        });
    };

    res.status(200).json({
        code: 0,
        result: _allGoods,
        msg: 'ok'
    });
    // var url = req.files.picture.path.split('public/')[1];
    // console.log(url)
    // return res.status(200).json({
    //     url: 'http://127.0.0.1:3100/' + url
    // });
});

router.post('/uploadfiles', upload, function(req, res) {
    console.log(color.green('    √ 文件上传'));
    var _allGoods = [];

    for(var i = 0; i < 20; i++) {
        _allGoods.push({
            "screenId":"2",
            "screenName":"早10点场",
            "actStartTime":"2017-11-30 10:00:00",
            "actEndTime":"2017-12-05 10:00:00",
            "firstCid":"1",
            "firstCname":"男装",
            "secondCid":"15",
            "secondCname":"男装",
            "brandName":"马克华菲",
            "mainBrandId":"151",
            "cooperationDesc":"pop",
            "applicant":"和珅",
            "contactErp":"纪晓岚",
            "error": {
                'actStartTime':'结束时间不正确，不在有效活动范围内'
            }
        });
    };

    res.status(200).json({
        code: 0,
        result: _allGoods,
        msg: 'ok'
    });
});

router.get('/material/initGoodList.html', function(req, res) {
    var _allGoods = [];

    for(var i = 0; i < 600; i++) {
        _allGoods.push({
            biSort: '22123399', // bi得分
            mbiSort: '49385899',
            manualSortValue: 1, //序号
            manualSortFlag: 1, // 是否使用手动排序
            biUpdateTime: '1491318183000', // bi更新时间
            skuid: i, // sku
            name: '商品name', // 商品名称
            imgurl: './57ff2dd0Na70db626.jpg', // 商品图片
            redPrice: 20, // 闪购价
            suggestPrice: 200, // 建议闪购价
            promotionStaus: 0, // 促销审核状态
            p: 199.9, // 现价
            state: 1, // sku状态
            isFlashPurchase: 2, // 闪购标
            isHandmade: 1, // 是否手工录入
            lowestPrice: 100, // 30天最低价
            ninetyLowestPrice: 99.9, // 90天最低价
            error: {
                
            }
            // isError: false,
            // selected: false,
        });
    };

    setTimeout(function() {
        res.status(200).json({
            code: 0,
            result: _allGoods,
            msg: 'ok'
        });
    }, 1000);
});

router.post('/material/realTimeValidSkuInfo.html', function(req, res) {
    console.log(color.green('    √ 商品校验'));

    res.status(200).json({
        code: 0,
        result: JSON.parse(req.body.skusJson),
        msg: 'ok'
    });
    // var url = req.files.picture.path.split('public/')[1];
    // console.log(url)
    // return res.status(200).json({
    //     url: 'http://127.0.0.1:3100/' + url
    // });
});

module.exports = router;