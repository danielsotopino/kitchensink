/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
	sayhello: function(req, res) {
		return res.json({greetings:'Hey hello!'});
	}

};

