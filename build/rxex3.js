'use strict';

var _Rx = require('rxjs/Rx');

var _Rx2 = _interopRequireDefault(_Rx);

var _util = require('./lib/util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by Hernan Y.Ke on 2016/3/8.
 */


_Rx2.default.Observable.interval(1000).take(3).subscribe((0, _util.createSub)("interval"));
_Rx2.default.Observable.timer(1000).subscribe((0, _util.createSub)("timer")); //timer has two params (start timeout, interval)

_Rx2.default.Observable.of("1", "2", "3").subscribe((0, _util.createSub)("of"));
_Rx2.default.Observable.from(["1", "2", "3"]).subscribe((0, _util.createSub)("from")); //from must use array
_Rx2.default.Observable.throw(new Error("error")).subscribe((0, _util.createSub)("error"));
_Rx2.default.Observable.empty().subscribe((0, _util.createSub)("empty"));
_Rx2.default.Observable.never().subscribe((0, _util.createSub)("empty")); //nothing, wtf??
_Rx2.default.Observable.range(1, 3).subscribe((0, _util.createSub)("empty"));

//defer
var j = 0;
var $defer = _Rx2.default.Observable.defer(function () {
  j++;
  return _Rx2.default.Observable.of(j);
});

$defer.subscribe((0, _util.createSub)("one"));
$defer.subscribe((0, _util.createSub)("two"));
$defer.subscribe((0, _util.createSub)("three"));