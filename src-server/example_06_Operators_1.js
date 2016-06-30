import Rx from 'rxjs/Rx';
import {createSubscriber} from './lib/util';

// Rx.Observable.range(1, 10)
//     .do(a => console.log(`From do ${a}`))
//     .map(i => i * i)
//     .subscribe(createSubscriber('simple'));

// Rx.Observable.range(1, 10)
//     .finally(() => console.log(`From finally`))
//     .map(i => i*2)
//     .subscribe(createSubscriber('finally'));

// Rx.Observable.range(1, 10)
//     .filter(a => a < 5 || a > 8)
//     .subscribe(createSubscriber('filter'));

// Rx.Observable.interval(1000)
//     .startWith(-1)
//     .subscribe(createSubscriber('simple'));