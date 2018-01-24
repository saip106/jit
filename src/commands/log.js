//fatal: your current branch 'master' does not have any commits yet
const fs = require('fs');
const path = require('path');

exports.command = 'log'
exports.desc = 'Show commit logs'
exports.builder = {}
exports.handler = function (argv) {
    const rootJitDirectory = './.git';

    //read HEAD file
    const headFilePath = path.join(rootJitDirectory, HEAD);
    fs.readFile(headFilePath, (error, data) => {
        //ref: refs/heads/master
        let parts = data.split(' ');
        if (parts.length !== 2 || parts[0] == 'ref:') {
            throw new Error('Invalid data in HEAD');
        }
        let headPointer = parts[1];

        const headRefPath = path.join(rootJitDirectory, headPointer);
        fs.readFile(headFilePath, (error, data) => {
            
        });
    });
    //traverse the tree from there
}