/**
 * Created by Hernan Y.Ke on 2016/3/7.
 */
import Rx from 'rxjs/Rx';


const $sp = new Rx.Observable(observer=> {
    setTimeout(()=> {
        observer.next("outer");
        setTimeout(()=> {
            observer.next("inner");
            observer.complete();
        }, 1000);
    }, 1000);
});

//three parameters. (next,error,complete)
//

$sp.subscribe(i=>console.log(`${i}`),
    error=>console.log(`${error}`),
    ()=>console.log(`first complete`)
)


const $err = new Rx.Observable(observer=>{
    observer.error(new Error('error'));
})

$err.subscribe(i=>console.log(`${i}`),
    error=>console.log(`${error.stack}`),
    ()=>console.log(`first complete`)
)

//alternative syntax
setTimeout(()=> {
    $sp.subscribe({
        next: i=>console.log(`${i}`),
        error(error){
            console.log(`${error}`)
        },
        complete(){
            console.log(`second complete`)
        }
    });
}, 2000)