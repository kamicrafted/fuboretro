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

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 10px 20px;
}
</style>