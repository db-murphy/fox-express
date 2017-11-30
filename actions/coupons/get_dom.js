var color = require('colorful');
var fs = require('fs');

function get_dom(req, res) {
	var red_path = process.cwd();

	fs.readFile(red_path + '/db_mock/coupons_dom.html', 'utf8', function(err, data) {
        console.log(color.green('    √ 优惠券模拟结构'));
        console.log(data);
        return res.status(200).send(data);
    });
};
 
module.exports = get_dom;