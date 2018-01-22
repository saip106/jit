#!/usr/bin/env node

let cli = require('./cli');

try {
    cli.run();    
} catch (error) {
    console.log(error.message);
}