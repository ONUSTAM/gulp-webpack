// @file app.js
import 'bootstrap/dist/css/bootstrap.css'
import '../styl/app.styl'

import _ from 'lodash'
import $ from 'jquery'
import 'bootstrap'
import 'bootstrap-datepicker'

import Vue from 'vue'
import VueRouter from 'vue-router'

import Foundation from './vue/foundation.vue'
import Index from './vue/pages/index.vue'
import List from './vue/pages/list.vue'
import Form from './vue/pages/form.vue'

Vue.component('Foundation', Foundation)
Vue.use(VueRouter)

// dev tool
Vue.config.devtools = false;

var router = new VueRouter();

router.map({
  '/': {
    component: Index
  },
  '/List': {
    component: List
  },
  '/Form': {
    component: Form
  }
})

router.beforeEach(function () {
  window.scrollTo(0, 0)
})

router.start(Foundation, '#app')
