'use strict';

var _Rx = require('rxjs/Rx');

var _Rx2 = _interopRequireDefault(_Rx);

var _util = require('./lib/util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var interval$ = _Rx2.default.Observable.interval(1000).take(10).publish();

interval$.connect();

setTimeout(function () {
    interval$.subscribe((0, _util.createSubscriber)('one'));
}, 1200);

setTimeout(function () {
    interval$.subscribe((0, _util.createSubscriber)('two'));
}, 3200);