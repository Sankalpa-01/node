const path = require('path')

// separator property : returns a platform specific separator
console.log(path.sep);

const filePath = path.join('/content/', 'subfolder', 'test.txt')
console.log(filePath);

const base = path.basename(filePath)
console.log(base);

// returns an absolute path
// path.resolve
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute);
