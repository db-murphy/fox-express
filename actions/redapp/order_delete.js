var color = require('colorful');
var fs = require('fs');

function get_page(req, res) {
  	var red_path = process.cwd();

  	console.log(color.green('    √ 取消订单'));
    res.status(200).json({
	    "body": {
	        "payUrl": ""
	    },
	    "code": 1
	});
};
 
module.exports = get_page;