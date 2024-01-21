const fs = require('fs');
const path = require('path');

const fileWay = path.resolve(__dirname, 'text.txt');
const reader = fs.createReadStream(fileWay);

reader.on('data', function (text) {
  console.log(text.toString());
});
