/**
 * Created by Hernan Y.Ke on 2016/3/8.
 */
import Rx from 'rxjs/Rx';
import {createSub} from './lib/util';


Rx.Observable.interval(1000).take(3).subscribe(createSub("interval"));
Rx.Observable.timer(1000).subscribe(createSub("timer")); //timer has two params (start timeout, interval)

Rx.Observable.of("1","2","3").subscribe(createSub("of"));
Rx.Observable.from(["1","2","3"]).subscribe(createSub("from"));   //from must use array
Rx.Observable.throw(new Error("error")).subscribe(createSub("error"));
Rx.Observable.empty().subscribe(createSub("empty"));
Rx.Observable.never().subscribe(createSub("empty"));  //nothing, wtf??
Rx.Observable.range(1,3).subscribe(createSub("empty"));

//defer
let j =0;
const $defer = Rx.Observable.defer(()=>{
    j++;
    return Rx.Observable.of(j);
})

$defer.subscribe(createSub("one"));
$defer.subscribe(createSub("two"));
$defer.subscribe(createSub("three"));