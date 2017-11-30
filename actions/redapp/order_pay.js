var color = require('colorful');
var fs = require('fs');

function get_page(req, res) {
  	var red_path = process.cwd();

  	console.log(color.green('    √ 支付模拟'));
    res.status(200).json({
	    "body": {
	        "payUrl": ""
	    },
	    "code": 1
	});
};
 
module.exports = get_page;