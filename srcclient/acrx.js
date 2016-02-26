/**
 * Created by Hernan Y.Ke on 2016/2/26.
 */
import $ from "jquery";
import Rx from "rxjs/Rx";

const $title = $("#title");
const $results =  $("#results");


const $keyup = Rx.Observable.fromEvent($title, "keyup");



$keyup.subscribe(e=>{
    getItems(e.target.value)
        .then(items=>{q
        $results.empty();
    const $items = items.map(item=>$(`<li/>`).text(item));
    $results.append($items);
});
})




function getItems(title){
    console.log(`${title}`);
    return new Promise((res,rej)=>{
        window.setTimeout(()=>{
            res([title,"Item"])
        },500+(Math.random()+100));
    });
}