var color = require('colorful');
var fs = require('fs');

function get_page(req, res) {
  	var red_path = process.cwd();

	fs.readFile(red_path + '/db_mock/orderPage.html', 'utf8', function(err, data) {
        console.log(color.green('    √ order模拟结构'));
        console.log(data);
        return res.status(200).send(data);
    });
};
 
module.exports = get_page;