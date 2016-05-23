exports.Journal = function(title, body){
  this.title = title;
  this.body = body;
};

exports.Journal.prototype.countWords = function() {
  var totalNow = 0;
  var strArray = this.body.split(' ');
  return totalNow = strArray.length;
};
