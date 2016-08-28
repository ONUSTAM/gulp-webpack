<template lang="html">
  <div id="foundation">
    <site-header></site-header>

    <router-view
      keep-alive
      >
    </router-view>
  </div>
</template>
<script>
import SiteHeader from '../vue/com/siteHeader.vue'
// import ApiClient from '../mod/apiClient.js'
// var apiClient = new ApiClient();

import ApiClient from 'babel!../mod/ApiClient.js'
var apiClient = new ApiClient('Tom');
console.log(apiClient.eat('beeeeeeeeef'));

export default {
  name: 'Foundation',
  data: function () {
    return {
    }
  },
  computed: {},
  ready: function () {},
  attached: function () {},
  methods: {},
  components: {
    SiteHeader
  }
}
</script>
