const fs = require('fs');
const readline = require('readline');
const path = require('path');

const fileWay = path.resolve(__dirname, 'text.txt');
const writeStream = fs.createWriteStream(fileWay, { flags: 'a' });
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log('Здравствуйте! Введите текст:');

rl.on('line', (userInput) => {
  if (userInput.trim().toLowerCase() === 'exit') {
    rl.close();
  } else {
    writeStream.write(userInput + '\n');
    rl.prompt();
  }
});

rl.on('close', () => {
  console.log('Прощайте!');
  writeStream.end();
  process.exit(0);
});
