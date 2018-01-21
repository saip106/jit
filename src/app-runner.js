const path = require('path');
const fs = require('fs');

module.exports = {
    run: function() {
        if(!fs.existsSync(path.join(__dirname + '.jit'))) {
            throw new Error('Not a jit repo');
        }
    }
}


