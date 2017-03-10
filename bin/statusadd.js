var model = require('../models/watch');
var chalk = require('chalk');
var prompt = require('prompt');

console.log(chalk.red("Add new url to watch"));
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
