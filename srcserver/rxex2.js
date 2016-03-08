/**
 * Created by Hernan Y.Ke on 2016/3/7.
 */
import Rx from 'rxjs/Rx';
function createInt(time){
    return new Rx.Observable(observer=>{
        let i =0;
        var timer = setInterval(()=>{
            observer.next(i++);

            //if (i==10)
            //clearInterval(timer);
        },time);
        return ()=>{
            clearInterval(timer);
        }
    })
}

function createSub(t){
    return{
        next(item){console.log(`${t}${item}`)},
        error(error){
            console.log(`${error}`)
        },
        complete(){
            console.log(`complete`)
        }
    }
}



//setTimeout(()=>{
//    sub.unsubscribe();
//},5000)

//multi param

function take(observable, amount){
    return new Rx.Observable(observer=>{
        let c =0;
        const subscription = observable.subscribe({
            next(item){
                observer.next(item);
                if(++c>=amount)
                observer.complete();
            },error(error){

            },complete(){
                return()=>subscription.unsubscribe();
            }
        })
    })
}

const sec = createInt(1000);
const firstn = take(sec,5);
const sub = firstn.subscribe(createSub("newsub"));
