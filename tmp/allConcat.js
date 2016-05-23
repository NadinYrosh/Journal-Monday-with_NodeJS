var Journal = require('./../js/browser.js').Journal;

$(document).ready(function(){
  $('#journal').submit(function(event){
    event.preventDefault();
    var title = $('#title').val();
    var body = $('#body').val();
    var newJournal = new Journal(title, body);
    $('#numberOfWords').text('You have typed ' + newJournal.countWords() + ' words.');
  });
});
