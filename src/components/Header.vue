<template>
    <div class="header">
      <h1>fuboRetro <span v-if="username">-</span> {{ username }}</h1>
      <button class="button button--export" @click="exportRetro">Export</button>
    </div>
</template>

<script>
export default {
  name: 'site-header',
  data () {
    return {
      
    }
  },

  computed: {
    username () {
      return this.$store.state.user;
    }
  },

  methods: {
    exportRetro () {
      this.$emit('export-retro');
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/app';

</style>