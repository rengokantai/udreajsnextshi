/**
 * Created by Hernan Y.Ke on 2016/2/26.
 */
import $ from "jquery";

const $title = $("#title");
const $results =  $("#results");

let last = null;
let timeout = null;
let nextId = 0;
$title.on("keyup",e=>{
    const title = e.target.value;

    if (title == last)
    return;
    last=title;

    if(timeout)
    window.clearTimeout(timeout);

    let currId = ++nextId;

    timeout = window.setTimeout(()=>{
        getItems(title).then(items=>{
            if(currId!=nextId)
            return;
            $results.empty();
            const $items = items.map(item=>$(`<li/>`).text(item));
            $results.append($items);
        });
    },500);


});


function getItems(title){
    console.log(`${title}`);
    return new Promise((res,rej)=>{
        window.setTimeout(()=>{
            res([title,"Item"])
        },500+(Math.random()+100));
    });
}