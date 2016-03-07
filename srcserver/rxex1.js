/**
 * Created by Hernan Y.Ke on 2016/3/7.
 */
import Rx from 'rxjs/Rx';


const $sp = new Rx.Observable(observer=>{
    setTimeout(()=>{
        observer.next("outer");
        setTimeout(()=>{
            observer.next("inner");
            observer.complete();
        },1000);
    },1000);
});