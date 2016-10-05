<template lang="html">
  <div class="container">
    <h1 class="text-center">
      <strong>
        {{ message }}
      </strong>
    </h1>
    <br>
    <div class="row">
      <p class="col-xs-4"></p>
      <p class="col-xs-4">
        <input type="text" name="name" class="form-control" style="" value="Gulp + WebPack + Vue" v-model="message">
      </p>
      <p class="col-xs-4"></p>
    </div>
    <br>

    <div class="panel panel-default">
      <div class="panel-heading">
        devDependencies
      </div>
      <div class="panel-body">
        <table class="table">
          <tr>
            <td>browser-sync</td>
          </tr>
          <tr>
            <td>babel</td>
          </tr>
          <tr>
            <td>bootstrap</td>
          </tr>
          <tr>
            <td>lodash</td>
          </tr>
          <tr>
            <td>stylus</td>
          </tr>
        </table>
      </div>
    </div>
    <br>

    <label>Start</label>
    <pre>$ gulp</pre>

  </div>
</template>

<script>

export default {
  name: 'Index',
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
