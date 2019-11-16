<template>
<div class="item" >
  <div class="item__left">
    <div class="handle"></div>
    <div class="avatar"></div>
    <h3>{{ item.description }}</h3>
  </div>
  <div class="actions">
    <div class="icon-edit" @click="editItem(itemIndex)"></div>
    <div class="icon-close" @click="removeItem(itemIndex)"></div>
  </div>
</div>
</template>

<script>
export default {
  name: 'list-item',
  data () {
    return {

    }
  },
  props: [
    "item",
    "itemIndex"
  ],
  methods: {
    removeItem (itemIndex) {
      window.console.log('removed item' + itemIndex);
      this.$emit('remove-item', itemIndex)
    },

    editItem (itemIndex) {
      this.$emit('edit-item', itemIndex, this.item.description)
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/scss/app';

.item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  padding: 12px;
  border-bottom: 1px solid $color-border;
  color: lighten($color-text, 20%);
  font-family: arial, sans-serif;
  font-size: 14px;
  transition: all .15s $easeInOutQuad;

  &:hover {
    .actions {
      opacity: 1;
    }
  }

  &__left {
    display: flex;
    align-items: center;
  }

  h3 {
    font-weight: normal;
  }

  .avatar {
    width: 24px;
    height: 24px;
    border-radius: 24px;
    margin-right: 8px;
    background: #eee;
  }

  .actions {
    display: flex;
    align-items: center;
    opacity: 0;
    transition: all .15s $easeInOutQuad;
  }

  .icon-edit {
    margin-right: 5px;
  }

  .icon-close {
    position: relative;

    &:before {
      content: "";
      position: absolute;
      width: 12px;
      height: 2px;
      background-color: lighten($color-text, 50%);
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%) rotate(45deg);
    }

    &:after {
      content: "";
      position: absolute;
      width: 12px;
      height: 2px;
      background-color: lighten($color-text, 50%);
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%) rotate(135deg);
    }
  }

  .handle {
    flex: 1 0 auto;
    display: block;
    width: 10px;
    height: 20px;
    margin-right: 10px;
    background-color: #dadada;
  }

  // &:last-child {
  //   border: none;
  // }
}

.ghost {
  background-color: white !important;
  box-shadow: 0 5px 10px rgba(black, .25);
}
</style>