#!/usr/bin/env node

let appRunner = require('./app-runner');

try {
    appRunner.run();    
} catch (error) {
    console.log(error.message);
}