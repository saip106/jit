let appRunner = require('../src/app-runner');
const expect = require('chai').expect;

describe('when running jit', () => {
    it('should check for the existance of .jit folder', () => {
        expect(appRunner.run).to.throw(Error, 'Not a jit repo');    
    });
});