// npm - global command, comes with node
// npm --version => to check which version is present in our system

// local dependency - use it only in this particulae project
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>

// 1:53:28 => write it
// package.json - manifest file(stores important info about project/package)
// npm init (step by step, press enter to skip)
// npm init -y (everything default) => to download the package.json


const _ = require('lodash');

const items = [1, [2,[3,[4]]]]
const newItems = _.flattenDeep(items);
console.log(newItems);
console.log("hello people");

