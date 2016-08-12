function rri () {
  // 担当依頼調査
  'use strict';
  //処理
  var processing = {
    key1:'準備中',
    key2:'接受済',
    key3:'受理済',
    key4:'記入中',
    key5:'回答済、否決',
    key6:'処理済、差戻し中',
    key7:'決裁中',
    key8:'決裁済',
    key9:'未回答',
    key10:'未処理分*（デフォルト）',
    key11:'未決裁分'
  };

  // 案件
  var projects = {
    key1: 'すべての案件',
    key2: '自分の所属する室課の案件*',
    key3: '自分の担当案件'
  };

  //ステータス
  var statuss = {
    key1:'ステータス等（昇順）*',
    key2:'接受日（降順）',
    key3:'接受日（昇順）',
    key4:'回答期限',
    key5:'レファレンス番号（昇順）',
    key6:'レファレンス番号（降順）',
    key7:'室課および担当者（よみ順）',
    key8:'回答期限が本日以降のみ'
  };

  //selectオプションを設定
  //key:valまで
  function options(obj) {
    var op = [];
    op = _.map(obj, function(val, key){
      return $('<option>')
              .text(val)
              .val(key)
    });
    return op;
  }

  this.processing = function () {
    return options(processing);
  }
  this.projects = function () {
    return options(projects);
  }
  this.statuss = function () {
    return options(statuss);
  }

}

module.exports = rri;
