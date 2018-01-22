let cli = require('../src/cli');
const expect = require('chai').expect;

describe('when running jit', () => {
    it('should check for the existance of .jit folder', () => {
        expect(cli.run).to.throw(Error, 'Not a jit repo');    
    });
});