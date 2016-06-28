import Rx from 'rxjs/Rx';
import {createSubscriber} from './lib/util';

// Rx.Observable.interval(1000)
//     .take(5)
//     .subscribe(createSubscriber('interval'));

// Rx.Observable.timer(1000, 100)
//     .take(3)
//     .subscribe(createSubscriber('timer'));

// Rx.Observable.of('Hey', 'there')
//     .subscribe(createSubscriber('of'));


// const arr = [1,2,3,4,5,6,7,8,9,10];

// Rx.Observable.from(arr)
//     .map( i => i*5)
//     .subscribe(createSubscriber('from'));

// Rx.Observable.empty()
//     .subscribe(createSubscriber('empty'));

// Rx.Observable.never()
//     .subscribe(createSubscriber('never'));

// Rx.Observable.throw('There is an error !')
//     .subscribe(createSubscriber('error'));

// let sideEffect = 0;
// const defer$ = Rx.Observable.defer(() => {
//     sideEffect++;
//     return Rx.Observable.of(sideEffect);
// });


// defer$.subscribe(createSubscriber('defer$.one'));
// defer$.subscribe(createSubscriber('defer$.two'));
// defer$.subscribe(createSubscriber('defer$.three'));

// Rx.Observable.range(10, 20)
//     .subscribe(createSubscriber('range'));