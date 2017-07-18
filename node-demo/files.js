const stream = require('stream');
const util = require('util');
const http = require('http');
const fs = require('fs');
const events = require('events');
const child_process = require('child_process')

var b = new Buffer("a long string");

console.log(b.toString());

fs.stat("this file name", (err, stats) => {
  if (stats) {console.log("this file exists")}
});
setImmediate(() => {
  console.log("Imm1");
});
setImmediate(() => {
  console.log("Imm2");
});
process.nextTick(() => {
  console.log("Tick1");
});
process.nextTick(() => {
  console.log("tick2");
});


function myObj() {
  events.EventEmitter.call(this);
}
myObj.prototype.__proto__ = events.EventEmitter.prototype;
var m = new myObj();

function sub() {

}
sub.prototype.__proto__ = events.EventEmitter.prototype;
var s = new sub();
s.on("myEvent",() => {
  console.log("I hear you")
});

s.emit("myEvent");

//child process fork example
//which can be clustered !!!
var options = {
  env: {user: 'My Name'},
  encoding : 'utf8'
};
function makeChild() {
  var child = child_process.fork('./zooKeeper.js', [], options);
  child.on('message', function(message) {
    console.log("zooKeeper Say:" + message);
  });
  return child;
}
function sendCommand(child, command) {
  console.log("Requesting:" + command);
  child.send({cmd:command});
}
var c1 = makeChild();
var c2 = makeChild();
var c3 = makeChild();

sendCommand(c1,"pets");
sendCommand(c1,"flyingBirds");
sendCommand(c1,"zooAnimals");
