require('dotenv').config();
var mongoose = require('mongoose');
var chalk = require('chalk');
var prompt = require('prompt');
mongoose.connect('mongodb://'+process.env.DbHost+'/'+process.env.DbName);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
var model = require('../models/watch');

console.log(chalk.red.bold("Add new url to watch"));
prompt.start();

prompt.get(['name','url'],function(err,result){
  if(err){
    console.log(chalk.red(err));
  }else{
    new model(result)
      .save()
      .then(function(){
        console.log(chalk.green("Service added"));
        process.exit(0);
      })
      .catch(function(err){
        console.log(chalk.red(err.message));
      });
  }
});
