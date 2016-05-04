/**
 * Created by Hernan Y.Ke on 2016/5/4.
 */
//4-2
import Rx from 'rxjs/Rx';
import {createSub} from './lib/util';

//Rx.Observable.interval(1000).merge(Rx.Observable.interval(500)).take(6).subscribe(createSub('mer1'));

//Or
Rx.Observable.merge(Rx.Observable.interval(1000).map(i=>`${i} sec`),Rx.Observable.interval(500).map(i=>`${i} half sec`)).take(6).subscribe(createSub('mer1'));

//concat is same as merge, but start one after one