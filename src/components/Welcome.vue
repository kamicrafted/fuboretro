<template>
  <div class="modal modal--welcome">
    <div class="modal__surface">
      <div class="modal__header">
        Welcome to fuboRetro
      </div>
      <div class="modal__body">
        <p>
          What's your name?
        </p>

        <div class="field__group">
          <input type="text" ref="username" v-model="user" placeholder="Enter your name">
        </div>
      </div>
      <div class="modal__footer">
        <button class="button button--join" @click="hideWelcome">Join</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'modal',
  data () {
    return {
      user: ""
    }
  },
  methods: {
    hideWelcome () {
      this.$store.commit('saveUser', this.user);
      this.$emit('hide-welcome');
      window.console.log('Local user commited: ' + this.user);
    },
  },
  mounted () {
    this.$nextTick(() => this.$refs.username.focus())
  }
}
</script>

<style lang="scss" scoped>
</style>