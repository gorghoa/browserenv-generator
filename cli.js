#!/usr/bin/env node

var args = require('yargs')
  .demand(['prefix', 'outfile'])
  .argv;

var fs = require('fs');

var EnvPublisher = require('./dist/env-publisher').default;

var publisher = new EnvPublisher(process.env, args.prefix);
fs.writeFile(args.outfile, publisher.generateBrowserEnv(), (error) => {
  console.log('ERROR or NOT', error);

});
