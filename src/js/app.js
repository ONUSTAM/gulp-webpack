// @file app.js
{
  'use strict';
  // import 'babel-polyfill';

  require("jquery");
  require("bootstrap");
  require('bootstrap/dist/css/bootstrap.css');
  var _ = require("lodash");

  var Hello = require('./components/Hello');

  var hello = new Hello();
  var testJq = $('#test').text();
  console.log('testJq: ', testJq);

  // 配列
  var array = [5, 10, 15];
  _.each(array, function(element, index, array) {
    console.log(element + ' : ' + index);
  });

  document.write(hello.message);

  var testBabel = () => {
    console.log('test babel ok!');
  }
  testBabel();
};
