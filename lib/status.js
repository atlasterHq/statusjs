var request  = require('request');
var memory   = require('memory-cache');

module.exports = function(){
  this.list = [];
  this.add = function(name,url){
    var ctx = {};
    ctx.name = name;
    ctx.url = url;
    this.list.push(ctx);
  };

  this.checkStatus = function(object){
    var url = object.url;
    request(url,function(err,resp,body){
      if(err){
        memory.put(object.name,false);
        //FIXME: Log these errors with timestamp
      }else{
        memory.put(object.name,true);
      }
    });
  };

  this.print = function(){
    var ctx = {};
    var i;
    for(i=0;i<this.list.length;i++){
      ctx[this.list[i].name] = memory.get(this.list[i].name);
    }
    return ctx;
  };

  this.update = function(){
    var i,atom;
    for(i=0;i<this.list.length;i++){
      atom = this.list[i];
      this.checkStatus(atom);
    }
  };
};
