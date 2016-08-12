// @file app.js

{
  'use strict';
  // import 'babel-polyfill';

  require("jquery");
  require("bootstrap");
  require('bootstrap-datepicker');
  require('bootstrap/dist/css/bootstrap.css');
  require('../css/app.css');

  var _ = require("lodash");


  //plugin
  var Datepicker = require('./mod/datepicker');
  var datepicker = new Datepicker();

  //
  var AutoScroller = require('./mod/autoScroller');
  var autoScroller = new AutoScroller('#scrollBase');

  //時間をセット
  var Times = require('./conf/tim');
  var times = new Times();
  $('.hour').append(times.hour());
  $('.minute').append(times.minute());

  // 業務系トップ -selectbox
  var Rri = require('./conf/rri');
  var rri = new Rri();
  $('.processing').append(rri.processing());
  $('.projects').append(rri.projects());
  $('.statuss').append(rri.statuss());

  // カスタムアコーディオンパネル
  var PanelTransf = require('./mod/panelTransf');
  var panelTransf = new PanelTransf();
  panelTransf.init();

  // リストの複製
  var AddList = require('./mod/addList');
  // 依頼調査 – 受理:副担当者
  var addList = new AddList();
  addList.init('.addList', '.list-inline', '.buttonAdd', '.buttonDel');


  var url = "https://api.nasa.gov/planetary/apod?api_key=NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo";


  $.ajax({
    url: url,
    success: function(result){
      if("copyright" in result) {
        $("#copyright").text("Image Credits: " + result.copyright);
      }
      else {
        $("#copyright").text("Image Credits: " + "Public Domain");
      }

      if(result.media_type == "video") {
        $("#apod_img_id").css("display", "none");
        $("#apod_vid_id").attr("src", result.url);
      }
      else {
        $("#apod_vid_id").css("display", "none");
        $("#apod_img_id").attr("src", result.url);
      }
      $('#apod_date').text(result.date);
      $("#reqObject").text(url);
      $("#returnObject").text(JSON.stringify(result, null, 4));
      $("#apod_explaination").text(result.explanation);
      $("#apod_title").text(result.title);
    }
  });


  (function(){
    $('.load-mask').remove();

    $('body').on('click', '.btn-moveTop', function(){
      console.log('aaa');
      autoScroller.scrollTop();
    });



// https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22nome%2C%20ak%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys
  })();


};
