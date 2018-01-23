const fs = require('fs');

exports.command = 'init'
exports.desc = 'Initialize jit repo'
exports.builder = {}
exports.handler = function (argv) {
	fs.mkdir('.jit', () => {        
        fs.mkdirSync('.jit/refs');
        fs.mkdirSync('.jit/refs/heads');
        fs.mkdirSync('.jit/refs/tags');        
        
        fs.writeFileSync('.jit/HEAD', 'ref: refs/heads/master');
        fs.writeFileSync('.jit/description', "Unnamed repository; edit this file 'description' to name the repository.");

        fs.mkdirSync('.jit/objects');
        
        fs.mkdirSync('.jit/hooks');

        fs.mkdirSync('.jit/info');        

        console.log(`Initialized empty jit repo in ${process.cwd()}`);
    });
}