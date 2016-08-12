function AddList() {
  'use strict';

  var containerId;
  var buttonAddId;
  var buttonDelId;
  var cloneId;
  var deleteId;

  //リスト追加
  function add () {

  };

  // イベント
  function events () {
    $(containerId).on('click', buttonAddId, function() {
      var parents = $(this).closest(containerId);
      $($(cloneId)[0]).clone().appendTo( parents );
      parents.removeClass('nos');
    });

    $(containerId).on('click', buttonDelId, function() {
      var parents = $(this).closest(containerId);
      var contents = $(this).closest(deleteId);
      contents.remove();

      if( parents.find(deleteId).length <= 1) {
        parents.addClass('nos');
      }
    });
  };

  // Id: 複製したい一覧のコンテナー
  // clId: 複製したいターゲット
  // bAId: 複製するボタン
  // bDId: 削除するボタン
  this.init = function (Id, clId, bAId, bDId) {
    containerId = Id;
    cloneId = containerId + ' ' + clId;
    deleteId = clId;
    buttonAddId = bAId;
    buttonDelId = bDId;

    events();
  };

}

module.exports = AddList;
