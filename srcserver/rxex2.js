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

const sec = createInt(1000);
const sub = sec.subscribe(createSub("newsub"));

setTimeout(()=>{
    sub.unsubscribe();
},5000)
