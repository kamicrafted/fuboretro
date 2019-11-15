<template>
<div class="item">
  <div class="item__left">
    <div class="avatar"></div>
    <h3>{{ item.description }}</h3>
  </div>
  <div class="icon-close" @click="removeItem(index)"></div>
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
    "index"
  ],
  methods: {
    removeItem (index) {
      window.console.log(index);
      this.$emit('remove-item', index)
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

  &:hover {
    .icon-close {
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

  .icon-close {
    position: relative;
    opacity: 0;
    transition: all .15s $easeInOutQuad;

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

  // &:last-child {
  //   border: none;
  // }
}
</style>