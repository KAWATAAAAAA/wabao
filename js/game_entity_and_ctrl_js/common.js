// Adapted from https://gist.github.com/paulirish/1579671 which derived from
// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
// http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating

// requestAnimationFrame polyfill by Erik Möller.
// Fixes from Paul Irish, Tino Zijdel, Andrew Mao, Klemen Slavič, Darius Bacon

// MIT license

if (!Date.now)
    Date.now = function() { return new Date().getTime(); };

(function() {
    'use strict';  //使用严格模式

    var vendors = ['webkit', 'moz'];
    for (var i = 0; i < vendors.length && !window.requestAnimationFrame; ++i) {			//如果 浏览器支持 requestAnimationFrame 就退出了，循环是给不支持的运行环境 一个退路
        var vp = vendors[i];
        window.requestAnimationFrame = window[vp+'RequestAnimationFrame'];
        window.cancelAnimationFrame = (window[vp+'CancelAnimationFrame']
                                   || window[vp+'CancelRequestAnimationFrame']);
    }
    if (/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) // iOS6 is buggy			// 苹果适配？？？
        || !window.requestAnimationFrame || !window.cancelAnimationFrame) {
        var lastTime = 0;
        window.requestAnimationFrame = function(callback) {
            var now = Date.now();
            var nextTime = Math.max(lastTime + 16, now);
            return setTimeout(function() { callback(lastTime = nextTime); },
                              nextTime - now);
        };
        window.cancelAnimationFrame = clearTimeout;
    }
}());





function preBackgroundImg(pic,callback){

    if (pic.complete) //如果已经完成 那么直接画
    {
        callback.call(pic);
        return ;
    }
    pic.onload = function () {    //否则等待加载完毕 立马调用callback

        callback.call(pic);

    }
}

function todoAjax(url,data,async,type,scallback,fcallback) {
    $.ajax({
        url,
        data,
        type,
        async,
        dataType: 'json',
        contentType: 'application/json;utf-8',
        success(data) {
            scallback(data);
        },
        error(err) {
            fcallback(err);
        }

    })
}
