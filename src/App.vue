<template>
  <!-- <v-app id="app">
    <router-view />
  </v-app> -->
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {};
  },
  created() {},
  mounted() {},

  methods: {}
};
</script>

<style lang="scss">
#app {
  font-family: Calibri, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body {
  margin: 0;
}
:root {
  --primary: Aquamarine;
}
</style>
