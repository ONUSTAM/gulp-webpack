function PanelTransf() {
  'use strict';

  var button = '.panel-transf__button';

  // イベント
  var events = function () {
    $(button).on('click', function() {
      var table = $(this).closest('table');
      var container = $(this).closest('.panel-transf');

      if($(table).hasClass('closed')) {
        $(table).removeClass('closed');
        $(container).removeClass('closed');
      } else {
        $(table).addClass('closed');
        $(container).addClass('closed');
      }

    });
  };

  //
  this.init = function () {
    events();
  };

}

module.exports = PanelTransf;
