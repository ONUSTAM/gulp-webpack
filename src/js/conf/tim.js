function tim () {
  'use strict';

  //selectオプションを設定
  //数値をst〜enまで
  function options(st, en) {
    var ar = [];
    for(var i=st;i <= en;i++) {
      var num;
      if(i<10){
        num = '0' + i;
      } else {
        num = i;
      }
      ar.push(
        $('<option>')
          .text(num)
          .val(i)
      );
    }
    return ar;
  }

  //時
  var hhSt = 1;
  var hhEn = 24;
  this.hour = function () {
    return options(hhSt, hhEn);
  }

  //分
  var mmSt = 0;
  var mmEn = 60;
  var minute = [
    '00', '10', '20', '30', '40', '50'
  ];
  this.minute = function () {
    return _.map(minute, function(val){
            return $('<option>')
                    .text(val)
                    .val(val)
          });
  }

}

module.exports = tim;
