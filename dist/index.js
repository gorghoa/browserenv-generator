"use strict";
var yargs = require('yargs');
var fs = require('fs');
var env_publisher_1 = require('./env-publisher');
var args = yargs
    .demand(['prefix', 'outfile'])
    .argv;
var publisher = new env_publisher_1.default(process.env, args.prefix);
fs.writeFile(args.outfile, publisher.generateBrowserEnv(), function (error) {
    console.log('ERROR or NOT', error);
});
