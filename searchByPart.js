/**
 * Created by tungpt on 19/09/2016.
 */
'use strict';

var fs = require('fs');
var path = require('path');

var name = 'lapp.js';

fs.readdir('../Module', function (err, listFiles) {
    var count = 0;
    for (var i = 0; i < listFiles.length; i++) {

        if (name == listFiles[i]) {
            console.log("File exist");
            count++;
        }
    }
    if (count == 0){
        console.log("File not exist");
    }

})

/*
var filePath = path.join(__dirname,'fs.js');

console.log(__dirname);
console.log(path.dirname(filePath));
console.log(path.basename(filePath));
console.log(path.basename(filePath,'.js'));
console.log(path.extname(filePath));
console.log(path.resolve(filePath,'..','views'));
*/

/*
fs.stat('app.js', function (err,stats) {
    if(stats.isDirectory()) {
        console.log('thu muc')
    }
    if (stats.isFile()){
        console.log('file')
    }
})
*/

/*
var stats = fs.statSync('app');

console.log(stats);
*/

/*fs.readdir('../Module', function (err,listFiles) {
    console.log(listFiles);
})*/
