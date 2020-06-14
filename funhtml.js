const fs = require('fs');
const path = require('path');

fs.copyFile(path.resolve('./build/index.html'), path.resolve('./functions/index.html'), (err) => {
    if (err) return console.log(err);
    fs.unlink('./build/index.html', err => {
        if (err) return console.log(err);
    });
});