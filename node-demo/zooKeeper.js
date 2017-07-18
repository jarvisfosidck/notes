process.on('message', (message, parent) => {
  let tr = {};
  console.log("cats");
  switch (message.cmd) {
    case 'pets' :
      tr = ['cats', 'dogs', 'some fish'];
      break;
    case 'flyingBirds' :
      tr = ['ducks', 'robin', 'bluebird'];
      break;
    case 'zooAnimals' :
      tr = ['lion', 'monkey', 'rhino', 'Graffi', 'zerbra'];
      break;
    }
    process.send(tr);
});
