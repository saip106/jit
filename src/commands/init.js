const fs = require('fs');

exports.command = 'init'
exports.desc = 'Initialize jit repo'
exports.builder = {}
exports.handler = function (argv) {
	fs.mkdir('.jit', () => {
        console.log('Initialized jit repo');
    });
}