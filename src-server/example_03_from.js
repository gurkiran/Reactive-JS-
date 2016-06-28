import Rx from 'rxjs/Rx';
import {createSubscriber} from './lib/util';

import fs from 'fs';

// fs.readdir('./src-server', (err, items) => {
//     if(err) console.error(err);
//     else {
//         console.log(items);
//     }
// });

// const readdir$ = Rx.Observable.bindNodeCallback(fs.readdir);

// readdir$('./src-server')
//     .mergeMap(files => Rx.Observable.from(files))
//     .map(file => `Manipulated ${file}`)
//     .subscribe(createSubscriber('readdir'));


// function getItem() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Hello');
//         }, 1000);
//     })
// }

// Rx.Observable.fromPromise(getItem())
//     .subscribe(createSubscriber('Promise'));

