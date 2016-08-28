<template lang="html">
  <br>

  <div class="container">
    <div class="panel panel-default">
      <div class="panel-heading">
        List
      </div>

      <div class="panel-body">

        <table class="table">
          <tr v-for="item in items">
            <td style="width: 40px;" class="text-right">
              {{ $index }}
            </td>
            <td style="width: 140px;">
              {{ item.title }}
            </td>
            <td>
              {{ item.context }}
            </td>
            <td style="width: 140px;" class="text-right">
              {{ item.update }}
            </td>
          </tr>
        </table>

      </div>
    </div>
  </div>

</template>

<script>
//
var listItem = function () {
  var lis = [];
  for ( var i = 0; i <= 30; i++) {
    lis.push({
      title: 'タイトル',
      context: 'ぶんしょう' + i,
      update: '2016/08/08'
    });
  }
  return lis;
}

export default {
  data: function () {
    return {
      items: listItem()
    }
  },
  computed: {},
  ready: function () {
    // this.$data.items = [1,2,3,4,5]


  },
  attached: function () {},
  methods: {},
  components: {}
}
</script>
