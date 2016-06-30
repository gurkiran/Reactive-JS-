'use strict';

var _Rx = require('rxjs/Rx');

var _Rx2 = _interopRequireDefault(_Rx);

var _util = require('./lib/util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const interval$ = Rx.Observable.interval(1000)
//     .take(20)
//     .publish();

// setTimeout(() => {
//     interval$.connect();
// }, 5000);

// setTimeout(() => {
//     interval$.subscribe(createSubscriber('one'));
// }, 1200);

// setTimeout(() => {
//     interval$.subscribe(createSubscriber('two'));
// }, 3200);

// const simple$ = new Rx.Observable(observer => {
//     observer.next(1);
//     observer.next(2);
//     observer.next(3);

//     return () => console.log('disposed');
// })

// const published$ = simple$.publishReplay(2);

// const sub1 = published$.subscribe(createSubscriber('one'));
// const connection = published$.connect();
// const sub2 = published$.subscribe(createSubscriber('two'));

// sub1.unsubscribe();
// sub2.unsubscribe();

// connection.unsubscribe();

var simple$ = new _Rx2.default.Observable(function (observer) {
    observer.next(1);
    observer.next(2);
    observer.next(3);

    return function () {
        return console.log('disposed');
    };
});

var published$ = simple$.share();

var sub1 = published$.subscribe((0, _util.createSubscriber)('one'));

var sub2 = published$.subscribe((0, _util.createSubscriber)('two'));

sub1.unsubscribe();
sub2.unsubscribe();