const {readFileSync, promises: fsPromises} = require('fs');

function readFile(filename) {
  const contents = readFileSync(filename, 'utf-8');
  const arr = contents.split(/\r?\n/);
  console.log(arr);
  return arr;
}

readFile('./image.txt');