<template lang="html">
  <div id="foundation">
    <header-nav></header-nav>

    <router-view
      keep-alive
      >
    </router-view>
  </div>
</template>
<script>
import HeaderNav from '../vue/com/headerNav.vue'

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
    HeaderNav
  }
}
</script>
