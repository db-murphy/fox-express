var color = require('colorful');
var fs = require('fs');

function stock_index(req, res) {
	var red_path = process.cwd();

	fs.readFile(red_path + '/db_mock/index_stock.json', 'utf8', function(err, data) {
        var mock_data = JSON.parse(data);

        console.log(color.green('    √ 首页库存模拟数据'));
        console.log(data);
        return res.status(200).json(mock_data);
    });
};
 
module.exports = stock_index;