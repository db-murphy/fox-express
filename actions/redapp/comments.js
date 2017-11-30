var color = require('colorful');
var fs = require('fs');

function get_page(req, res) {
  	var red_path = process.cwd();

	fs.readFile(red_path + '/db_mock/feed_back.json', 'utf8', function(err, data) {
		data = JSON.parse(data);
        console.log(color.green('    √ 回复数据模拟'));
        console.log(data);
        return res.status(200).json(data);
    });
};
 
module.exports = get_page;