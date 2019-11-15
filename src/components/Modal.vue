<template>
  <div class="modal" @click="hideModal">
    <div class="modal__surface" @click.stop>
      <div class="modal__header">
        <h2>{{ quadrant[index].addTitle }}</h2>
      </div>
      <div class="modal__body">
        <div class="field__group">
          <label for="name">Name</label>
          <!-- <input name="name" type="text" v-model="author"> -->
          <select name="author" id="author">
            <option v-for="user in userList" :key="user.name" :value="user.name">{{ user.name }}</option>
          </select>
        </div>
        <div class="field__group">
          <label for="description">Description</label>
          <textarea name="description" rows="10" v-model="description"></textarea>
        </div>
      </div>
      <div class="modal__footer">
        <button @click="createNewItem(index, author, description)" class="button" :class="'button--'+quadrant[index].class">Add</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'modal',
  data () {
    return {
      description: ""
    }
  },
  props: {
    quadrant: Array,
    index: Number
  },
  computed: {
    userList () {
      return this.$store.state.users;
    }
  },
  methods: {
    hideModal () {
      this.$emit('hide-modal');
    },
    createNewItem (index, author, description) {
      this.$emit('create-new-item', index, author, description);
    }
  }
}
</script>

<style lang="scss" scoped>
</style>