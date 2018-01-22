const path = require('path');
const fs = require('fs');
const yargs = require('yargs');

module.exports = {

    run: function() {
        var cliArguments = yargs.argv._;
        if (cliArguments.includes('init')) {
            yargs
                .commandDir('commands')
                .demandCommand()
                .help()
                .argv
        }
        else if(!fs.existsSync(path.join(__dirname + '.jit'))) {
            throw new Error('Not a jit repo');
        }
    }
}

