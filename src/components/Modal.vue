<template>
  <div class="modal" @click="hideModal">
    <div class="modal__surface" @click.stop>
      <div class="modal__header">
        <h2>{{ quadrant[index].addTitle }}</h2>
      </div>
      <div class="modal__body">
        <div class="field__group">
          <label for="name">Name</label>
          <input name="name" type="text" v-model="author">
        </div>
        <div class="field__group">
          <label for="description">Description</label>
          <textarea name="description" rows="10" v-model="description"></textarea>
        </div>
      </div>
      <div class="modal__footer">
        <button @click="createNewItem(index, author, description)">Add</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'modal',
  data () {
    return {
      author: "",
      description: ""
    }
  },
  props: {
    quadrant: Array,
    index: Number
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
@import '@/scss/app';

.modal {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 5000;
  width: 100%;
  height: 100%;
  background-color: rgba(black, .8);

  &__surface {
    width: 500px;
    height: auto;
    background-color: white;
    border-radius: $border-radius;
    box-shadow: 0 20px 50px rgba(black, .5), 0 10px 10px -5px rgba(black, .5);
  }

  &__header {
    padding: 10px 20px;
    border-bottom: 1px solid $color-border;
    font-weight: bold;
  }

  &__body {
    padding: 20px;
  }

  &__footer {
    padding: 10px 20px;
    border-top: 1px solid $color-border;
  }
}
</style>