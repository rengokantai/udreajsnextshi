/**
 * Created by Hernan Y.Ke on 2016/5/4.
 */
import $ from "jquery";
import Rx from "rxjs/Rx";

const $drag = $("#drag");
const $document = $(document);
const $dropAreas = $(".drop-area");

const beginDrag = Rx.Observable.fromEvent($drag,"mousedown");
const endDrag = Rx.Observable.fromEvent($document,"mouseup");
const mouseMove = Rx.Observable.fromEvent($document,"mousemove");

const drops = beginDrag.do(e=>{
    e.preventDefault();
    $drag.addClass("dragging");
}).mergeMap(startEvent=>{
    return mouseMove.takeUntil(endDrag).do(moveEvent=>moveDrag(startEvent,moveEvent)).last();
}).do(()=>{
    $drag.removeClass("dragging").animate({top:0,left:0},200)
})

drops.subscribe($dropAreas=>{
    console.log($dropAreas);
})

function moveDrag(startEvent,moveEvent){
    $drag.css({
        left:moveEvent.clientX-startEvent.offsetX,
        top:moveEvent.clientY-startEvent.offsetY

    })
}