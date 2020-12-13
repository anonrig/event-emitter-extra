global.assert = require('assert');
global.sinon = require('sinon');
global.__MODERN__ = true;

global.EventEmitterExtra = require('../src/event-emitter-extra');
require('./test');
