/**
 * Created by Hernan Y.Ke on 2016/5/4.
 */
//4-6
import Rx from 'rxjs/Rx';
import {createSub} from './lib/util';

const si = new Rx.Observable(observer=>{
    observer.next(1);
    observer.next(2);
    observer.next(3);
    observer.next(4);
    observer.complete();
})

si.first().subscribe(createSub("first"))

//last(), single() (only return a observable with 1 elem),
//skip,find

//skip 1 2 3
Rx.Observable.interval(1000).skipWhile(i=>i<4).takeWhile(i=>i<7).subscribe(createSub("skipWhile"));


//Note the interval is 3 sec, not 5sec
Rx.Observable.interval(500).skipUntil(Rx.Observable.timer(2000)).takeUntil(Rx.Observable.timer(5000))
    .subscribe(createSub("skipUntil"));
