/*
スクロールイベントを簡単にしたいです。
params = {
  speed: スクロールのスピード
}
*/
function AutoScroller (base, params) {
  'use strict';
  // var SCREEN = 'html,body';
  var SCREEN = base;
  var parameter = {
    speed: 500,
  };

  // CONST & INIT
  (function(params) {
    setPamans( params );
  })(params);

  // パラメータを設定しよう
  function setPamans (params) {
    if (params) { return; }

    _.each(params, function(val, key) {
      parameter[key] = params[key];
    });
  }

  // 上にスクロールするよ。
  function scrollerTop (val) {
    $(SCREEN).animate({scrollTop: val}, 500);
  }
  // 下にスクロールするよ。
  function scrollerBottom (val) {
  }

  //　上
  function scrollTop () {
    scrollerTop(0);
  }

  // 下
  function scrollBoottom () {
    // scrollerBottom();
  }

  // PUBLIC FUNCTION's
  this.scrollTop = scrollTop;
  this.scrollBoottom = scrollBoottom;
};
module.exports = AutoScroller;
