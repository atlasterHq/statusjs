var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var watchSchema = new Schema({
  name: {type: String, required: true},
  url : {type: String, required: true}
});

module.exports = mongoose.model('watch',watchSchema);
