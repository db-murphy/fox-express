var color = require('colorful');
var fs = require('fs');

function price_index(req, res) {
	var red_path = process.cwd();

	fs.readFile(red_path + '/db_mock/index_price.json', 'utf8', function(err, data) {
        var mock_data = JSON.parse(data);

        console.log(color.green('    √ 首页价格模拟数据'));
        console.log(data);
        setTimeout(function() {
        	res.status(200).jsonp(mock_data);
        }, 1000);
    });
};
 
module.exports = price_index;