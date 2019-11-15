<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <Welcome @hide-welcome="hideWelcome" v-if="welcomeVisible" />
    <router-view/>
  </div>
</template>

<script>
import Welcome from '@/components/Welcome';

export default {
  name: 'app',
  data () {
    return {
      welcomeVisible: true,
    }
  },
  components: {
    Welcome
  },
  methods: {
    hideWelcome () {
      this.welcomeVisible = false;
    }
  }
}
</script>

<style lang="scss">
@import "@/scss/app";

#app {
  height: 100%;
  padding: 0;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
