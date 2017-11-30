var color = require('colorful');
var fs = require('fs');

function get_coupon(req, res) {
    console.log(color.green('    √ 优惠券模拟领取'));
    console.log(req.body);
    console.log('TRUE');
    setTimeout(function() {
    	return res.status(200).send('TRUE');
    }, 1000);

    var a = 1;
    var b = 2;
    var c = 3;
    var d = 4;
    var e = 5;
};

module.exports = get_coupon;