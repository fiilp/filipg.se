const assert = require('assert');
const path = require('path');
const fs = require('fs');

describe('Files exists', () => {
    it('index.html exists', () => { 
        assert.equal(fs.existsSync(path.resolve('./index.html')),true);
    });
});
