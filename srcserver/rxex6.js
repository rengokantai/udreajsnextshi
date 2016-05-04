/**
 * Created by Hernan Y.Ke on 2016/5/4.
 */
//4-1
import Rx from 'rxjs/Rx';
import {createSub} from './lib/util';

Rx.Observable.range(1,5).do(a=>console.log(a)).map(a=>a*a).subscribe(createSub("simple"))
Rx.Observable.range(1,5).finally(()=>console.log("finally print this")).map(a=>a*a).subscribe(createSub("finally"))
Rx.Observable.range(1,5).filter(a=>a<4).subscribe(createSub("filter"));
Rx.Observable.interval(8000).startWith(-1).subscribe(createSub("interval"));
//using startWith to trigger immediate start,else it will start after 8 sec