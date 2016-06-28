import Rx from 'rxjs/Rx';
import {createSubscriber} from './lib/util';

const interval$ = Rx.Observable.interval(1000)
    .take(10)
    .publish();

interval$.connect();

setTimeout(() => {
    interval$.subscribe(createSubscriber('one'));
}, 1200);


setTimeout(() => {
    interval$.subscribe(createSubscriber('two'));
}, 3200);
    