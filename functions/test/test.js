const assert = require('assert');
const path = require('path');
const fs = require('fs');

describe('Files exists', () => {
    it('index.html exists in functions', () => { 
        assert.equal(fs.existsSync(path.resolve('./index.html')),true);
    });
});
describe('Files do not exist', () => {
    it('index.html does not exist in build', () => { 
        assert.notEqual(fs.existsSync(path.resolve('./../build/index.html')),true);
    });
})
