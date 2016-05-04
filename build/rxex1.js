"use strict";

var _Rx = require("rxjs/Rx");

var _Rx2 = _interopRequireDefault(_Rx);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $sp = new _Rx2.default.Observable(function (observer) {
    setTimeout(function () {
        observer.next("outer");
        setTimeout(function () {
            observer.next("inner");
            observer.complete();
        }, 1000);
    }, 1000);
});

//three parameters. (next,error,complete)
//

/**
 * Created by Hernan Y.Ke on 2016/3/7.
 */
$sp.subscribe(function (i) {
    return console.log("" + i);
}, function (error) {
    return console.log("" + error);
}, function () {
    return console.log("first complete");
});

var $err = new _Rx2.default.Observable(function (observer) {
    observer.error(new Error('error'));
});

$err.subscribe(function (i) {
    return console.log("" + i);
}, function (error) {
    return console.log("" + error.stack);
}, function () {
    return console.log("first complete");
});

//alternative syntax
setTimeout(function () {
    $sp.subscribe({
        next: function next(i) {
            return console.log("" + i);
        },
        error: function error(_error) {
            console.log("" + _error);
        },
        complete: function complete() {
            console.log("second complete");
        }
    });
}, 2000);