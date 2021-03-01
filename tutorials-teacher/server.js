var emitter = require('events').EventEmitter; 
function LoopProcess(num){
  var e = new emitter();
  setTimeout(function(){
    for(var i = 1; i<= num; i++){
      e.emit('BeforeProcess', i)
      console.log('Process number:' + 1)
      e.emit('After Process', i)
    }
  },2000)
  return e;
}

var lp = LoopProcess(3)
lp.on('BeforeProcess', function(data){
  console.log('About to start the process for ' + data)
})

lp.on('AfterProcess', function(data){
  console.log('Completed processing ' + data)
})