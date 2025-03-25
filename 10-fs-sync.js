// const fs = require('fs') => Second way of calling/importing the method

const { readFileSync, writeFileSync } = require('fs')
console.log('start');


// reading method
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

// console.log(first);
// console.log(second);

// writing method

// as the file doesnot exits here so node will automatically create a new text file with the given name.
// flag : 'a' => this line with one one more line in the text file 
writeFileSync(
    './content/result-async.txt', 
    `Here is the result: ${first}, ${second}`,
    {flag: 'a'}
)

// node is not going to serve other user

console.log('Done with the task!');
console.log('Starting with the new one =>');