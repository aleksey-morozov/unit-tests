'use strict';
const path = require('path');

process.env.TS_NODE_PROJECT = require.resolve('./tests/tsconfig.json');

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
