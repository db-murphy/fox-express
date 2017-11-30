var color = require('colorful');
var fs = require('fs');

function get_status(req, res) {
    var red_path = process.cwd();

	fs.readFile(red_path + '/db_mock/coupon_status.json', 'utf8', function(err, data) {
        var mock_data = JSON.parse(data);

        console.log(color.green('    √ 优惠券状态模拟数据'));
        console.log(data);
        return res.status(200).jsonp(mock_data);
    });
};

module.exports = get_status;