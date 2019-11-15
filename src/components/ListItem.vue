<template>
<div class="item">
  <h3>{{ item.description }}</h3>
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
  props: {
    item: Object,
    index: Number
  },
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
  
  h3 {
    font-weight: normal;
  }

  &:hover {
    .icon-close {
      opacity: 1;
    }
  }

  .icon-close {

    opacity: 0;
    transition: all .15s $easeInOutQuad;
  }

  // &:last-child {
  //   border: none;
  // }
}
</style>