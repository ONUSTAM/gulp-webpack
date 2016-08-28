<template lang="html">
  <div id="siteHeader">

    <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <h2 class="h1">
            <a class="navbar-brand" href="#">graminume</a>
          </h2>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="nav navbar-nav navbar-right" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
            <li v-bind:class="{'active': $route.path === '/List' }">
              <a v-link="{ path: '/List' }">List</a>
            </li>
            <li v-bind:class="{'active': $route.path === '/Form' }">
              <a v-link="{ path: '/Form' }">Form</a>
            </li>
          </ul>
        </div><!-- /.navbar-collapse -->
      </div><!-- /.container-fluid -->
    </nav>

  </div>
</template>

<script>

export default {
    name: 'SiteHeader',
    data: function () {
    return {
    }
  },
  computed: {},
  ready: function () {},
  attached: function () {},
  methods: {},
  components: {
  }
}
</script>
