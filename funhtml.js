const fs = require('fs');

fs.copyFile('./build/index.html', './functions/index.html', (err) => {
    if (err) return console.log(err);
    fs.unlink('./build/index.html', err => {
        if (err) return console.log(err);
    });
});