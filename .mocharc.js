'use strict';
const path = require('path');

const hasGrep = process.argv.some(arg => arg === '--grep');

const config = {
  recursive: true,
  require: ['module-alias/register', 'ts-node/register/transpile-only'],
  spec: path.join(__dirname, 'tests/**/*.spec.{js,ts}'),
  exit: true,
};

if (hasGrep) {
  config.recursive = false;
  delete config.spec;
}

module.exports = config;
