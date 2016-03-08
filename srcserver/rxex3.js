/**
 * Created by Hernan Y.Ke on 2016/3/8.
 */
import Rx from 'rxjs/Rx';
import {createSub} from './lib/util';


Rx.Observable.interval(1000).take(3).subscribe(createSub("interval"));
Rx.Observable.timer(1000).subscribe(createSub("timer")); //timer has two params (start timeout, interval)