var G = require('./G.js');

const col = new G;

let a = ['key1', 1];
let b = ['key2', 2];
let c = ['key3', 3];
col.set(...a);
col.set(...b);
col.set(...c);

 console.log("will see 1" , col.next());
// console.log(col.has('key3'));
// console.log(col.length());

let prom = new Promise((resolve, reject) => {
  // We call resolve(...) when what we were doing made async successful, and reject(...) when it failed.
  // In this example, we use setTimeout(...) to simulate async code.
  let tmp = col.next();
  setTimeout(function(){
    //resolve('"key": ' + tmp.k + "val" + tmp.num); // Yay! Everything went well!
    reject('"we fail for fun key": ' + tmp.k + "val" + tmp.num); //Fail Everything went well!
  }, 500);
});

prom.then((successMessage) => {
    // successMessage is whatever we passed in the resolve(...) function above.
    // It doesn't have to be a string, but if it is only a succeed message, it probably will be.
    console.log("Yay! " + successMessage);
  }).catch(
    // Log the rejection reason
   (reason) => {
        console.log('Handle rejected promise ('+reason+') here.');
  });
