<template lang="html">
  <div class="container">
    <h3><strong>Form</strong></h3>
    <br>

    <div class="panel panel-default">
      <div class="panel-heading">
        form
      </div>
      <div class="panel-body">

        <p>
          <label>Name: </label>
          {{ name }}
        </p>
        <p>
          <label>Age: </label>
          {{ birthY }} / {{ birthM }} / {{ birthD }}
        </p>
        <p>
          <label>Gender: </label>
          {{ gender }}
        </p>

      </div>
      <div class="panel-footer text-right">
        <!-- Button trigger modal -->
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">
          EDIT
        </button>
      </div>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">

          <div class="modal-body">
            <p>
              <label>Name</label>
              <ul class="list-inline">
                <li>
                  <input type="text" class="form-control" v-model="name">
                </li>
              </ul>
            </p>
            <p>
              <label>Age</label>
              <ul class="list-inline">
                <li>
                  <select class="form-control" v-model="birthY">
                    <option> - </option>
                    <option v-for="y in lst_birthY">{{ y }}</option>
                  </select>
                </li>
                <li>/</li>
                <li>
                  <select class="form-control" v-model="birthM">
                    <option> - </option>
                    <option v-for="m in lst_birthM">{{ m }}</option>
                  </select>
                </li>
                <li>/</li>
                <li>
                  <select class="form-control" v-model="birthD">
                    <option> - </option>
                    <option v-for="d in lst_birthD">{{ d }}</option>
                  </select>
                </li>
              </ul>
            </p>
            <p>
              <label>Gender</label>
              <ul class="list-inline">
                <li>
                  <label><input type="radio" value="man" v-model="gender"> MAN</label>
                </li>
                <li>
                  <label><input type="radio" value="woman" v-model="gender"> WOMAN</label>
                </li>
              </ul>
            </p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
function _birthY () {
  var y = [];
  for ( var i = 1970; i <= 2016; i++) {
    y.push(i)
  }
  return y;
}
function _birthM () {
  var m = [];
  for ( var i = 1; i <= 12; i++) {
    m.push(i)
  }
  return m;
}
function _birthD () {
  var d = [];
  for ( var i = 1; i <= 31; i++) {
    d.push(i)
  }
  return d;
}

export default {
  name: 'Form',
  data: function () {
    return {
      test1: 'Title 1',
      lst_birthY: _birthY(),
      lst_birthM: _birthM(),
      lst_birthD: _birthD(),
      name: 'Abc Def',
      birthY: 1982,
      birthM: 8,
      birthD: 20,
      gender: 'man'
    }
  },
  computed: {},
  ready: function () {},
  attached: function () {},
  methods: {},
  components: {}
}
</script>
