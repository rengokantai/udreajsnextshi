/**
 * Created by Hernan Y.Ke on 2016/2/26.
 */
import $ from "jquery";

const $title = $("#title");
const $results =  $("#results");

$title.on("keyup",e=>{
    const title = e.target.value;

    getItems(title).then(items=>{
        $results.empty();
        const $items = items.map(item=>$(`<li/>`).text(item));
        $results.append($items);
    })
});


function getItems(title){
    return new Promise((res,rej)=>{
        window.setTimeout(()=>{
            res([title,"Item","another"])
        },500+(Math.random()+100));
    });
}