//  file system : read file, create file, delete file, update file, rename file
// syntax : var fs = require('fs);

// Reading a file

var fs = require('fs');

fs.readFile('./hello.txt',  (err,data) => {
    if(!err) {
//        console.log(data);
        console.log(data.toString());
    }
})

// writing in file and reading a file

fs.writeFile('./hello.txt','welcome to world',(err) => {
    if(!err) {
        fs.readFile('./hello.txt',  (err,data) => {
            if(!err) {
                console.log(data.toString());
            }
        });   
    }
});