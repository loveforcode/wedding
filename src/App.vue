<template>
  <div id="app">
    <navbar></navbar>
    <router-view></router-view>
    <footbar></footbar>
  </div>
</template>

<script>
import navbar from './components/navbar.vue';
import footbar from './components/footbar.vue';

export default {
  name: 'app',
  data () {
    return {}
  },
  components : {
      navbar,footbar
  }
}
</script>

<style>

</style>
