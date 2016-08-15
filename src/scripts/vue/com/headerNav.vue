<template lang="html">
  <div id="headerNav">

    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand" href="#">
            graminume
          </a>
        </div>
      </div>
    </nav>



    <ul>
      <li>
        <a
          v-bind:class="{'active': $route.path === '/' }"
          v-link="{ path: '/' }"
          >top</a>

      </li>
      <li>
        <a
          v-bind:class="{'active': $route.path === '/List' }"
          v-link="{ path: '/List' }"
          >list</a>

      </li>
    </ul>

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
