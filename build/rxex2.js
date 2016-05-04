"use strict";

var _Rx = require("rxjs/Rx");

var _Rx2 = _interopRequireDefault(_Rx);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createInt(time) {
    return new _Rx2.default.Observable(function (observer) {
        var i = 0;
        var timer = setInterval(function () {
            observer.next(i++);

            //if (i==10)
            //clearInterval(timer);
        }, time);
        return function () {
            clearInterval(timer);
        };
    });
} /**
   * Created by Hernan Y.Ke on 2016/3/7.
   */


function createSub(t) {
    return {
        next: function next(item) {
            console.log("" + t + item);
        },
        error: function error(_error) {
            console.log("" + _error);
        },
        complete: function complete() {
            console.log("complete");
        }
    };
}

//setTimeout(()=>{
//    sub.unsubscribe();
//},5000)

//multi param

function take(observable, amount) {
    return new _Rx2.default.Observable(function (observer) {
        var c = 0;
        var subscription = observable.subscribe({
            next: function next(item) {
                observer.next(item);
                if (++c >= amount) observer.complete();
            },
            error: function error(_error2) {},
            complete: function complete() {
                return function () {
                    return subscription.unsubscribe();
                };
            }
        });
    });
}

var sec = createInt(1000);
var firstn = take(sec, 5);
var sub = firstn.subscribe(createSub("newsub"));