
const fs = require("fs")

// fs.writeFileSync("file1.txt","this is new file");
const data =fs.readFileSync("file1.txt","utf8")
console.log(data);
fs.appendFileSync('file1.txt', "new file added/n")


