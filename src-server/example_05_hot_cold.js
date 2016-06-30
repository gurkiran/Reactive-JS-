import Rx from 'rxjs/Rx';
import {createSubscriber} from './lib/util';

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



const simple$ = new Rx.Observable(observer => {
    observer.next(1);
    observer.next(2);
    observer.next(3);
    
    return () => console.log('disposed');
})

const published$ = simple$.share();

const sub1 = published$.subscribe(createSubscriber('one'));

const sub2 = published$.subscribe(createSubscriber('two'));

sub1.unsubscribe();
sub2.unsubscribe();















    