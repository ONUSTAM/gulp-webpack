// @file app.js

import 'bootstrap/dist/css/bootstrap.css'
import '../css/app.css'


import 'bootstrap'
import 'bootstrap-datepicker'

import Vue from 'vue'
import VueRouter from 'vue-router'
import $ from 'jquery'
import _ from 'lodash'

import Foundation from './vue/foundation.vue'
import Idx from './vue/pages/idx.vue'
import List from './vue/pages/list.vue'

Vue.component('Foundation', Foundation)

Vue.use(VueRouter)
var router = new VueRouter();

router.map({
  '/': {
    component: Idx
  },
  '/List': {
    component: List
  }
})

router.beforeEach(function () {
  window.scrollTo(0, 0)
})

router.start(Foundation, '#app')

//
// //plugin
// import Datepicker from './mod/datepicker'
// var datepicker = new Datepicker();
//
// //
// import AutoScroller from './mod/autoScroller'
// var autoScroller = new AutoScroller('#scrollBase');
//
// //
// // import ApiClient from './mod/apiClient'
// // var apiClient = new ApiClient();
// var url = "https://api.nasa.gov/planetary/apod?api_key=NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo";
//
// $.ajax({
//   url: url,
//   success: function(result){
//     if("copyright" in result) {
//       $("#copyright").text("Image Credits: " + result.copyright);
//     }
//     else {
//       $("#copyright").text("Image Credits: " + "Public Domain");
//     }
//
//     if(result.media_type == "video") {
//       $("#apod_img_id").css("display", "none");
//       $("#apod_vid_id").attr("src", result.url);
//     }
//     else {
//       $("#apod_vid_id").css("display", "none");
//       $("#apod_img_id").attr("src", result.url);
//     }
//     $('#apod_date').text(result.date);
//     $("#reqObject").text(url);
//     $("#returnObject").text(JSON.stringify(result, null, 4));
//     $("#apod_explaination").text(result.explanation);
//     $("#apod_title").text(result.title);
//   }
// });
//
//
// (function(){
//   $('.load-mask').remove();
//
//   $('body').on('click', '.btn-moveTop', function(){
//     autoScroller.scrollTop();
//   });
//
// })();
