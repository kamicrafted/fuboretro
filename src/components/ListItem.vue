<template>
<div class="item">
Item
</div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
@import '@/scss/app';

.item {
  padding: 12px;
  border-bottom: 1px solid $color-border;

  &:last-child {
    border: none;
  }
}
</style>