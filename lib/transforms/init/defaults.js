'use strict';

var cwd = require('cwd');

/**
 * Define default options.
 */

module.exports = function(app) {
  app.defaults('templates.examples', cwd('.'));
  app.defaults('templates.includes', require('readme-includes'));
  app.defaults('templates.badges', require('readme-badges'));
  app.defaults('templates.docs', cwd('docs'));

  app.option({
    toc: {append: '\n\n_(Table of contents generated by [verb])_'}
  });

  // engines
  app.option('view engine', 'md');

  // routing
  app.option('router methods');
  app.enable('case sensitive routing');
  app.enable('strict routing');

  // delimiters
  app.option('layoutDelims', ['<<%', '%>>']);
  app.option('escapeDelims', ['{%%', '{%']);
};