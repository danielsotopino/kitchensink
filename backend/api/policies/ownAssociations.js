module.exports = function(req, res, next) {
  var userId = req.param('parentid');
  var currentUserId = req.token.sid;

  console.log('Oh well hello');
  console.log('userId: ' + userId + ' - currentUserId: ' + currentUserId);

  if (userId != currentUserId) {
    return res.json(403, {err: 'You are not allowed to do that'});
  }

  next();

};
