var color = require('colorful');
var fs = require('fs');

function stock_index(req, res) {
	var red_path = process.cwd();
	var type = req.query.rankType;
	var jsonFile = 'top.html';

	if(type == '2') {
		jsonFile = 'act.html';
	}

	fs.readFile(red_path + '/db_mock/' + jsonFile, 'utf8', function(err, data) {
        console.log(color.green('    √ top模拟数据'));
        console.log(data);
        return res.status(200).send(data);
    });
};
 
module.exports = stock_index;