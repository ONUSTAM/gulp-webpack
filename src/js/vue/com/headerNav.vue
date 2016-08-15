<template lang="html">
  <div id="headerNav">

    <a
      v-bind:class="{'active': $route.path === '/' }"
      v-link="{ path: '/' }"
      >top</a>

    <a
      v-bind:class="{'active': $route.path === '/List' }"
      v-link="{ path: '/List' }"
      >list</a>

  </div>
</template>

<script>
export default {
    name: 'HeaderNav',
    data: function () {
    return {
    }
  },
  computed: {},
  ready: function () {},
  attached: function () {},
  methods: {},
  components: {}
}
</script>

<style lang="css">
</style>
