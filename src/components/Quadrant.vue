<template>
  <div class="quad" :class="'quad--' + quadrant.class">
    <div class="quad__header">
      <h2>{{ quadrant.title }}</h2>
      <div class="quad__add" @click="addItem(index, quadrant.class, $event)"></div>
    </div>
    <div class="quad__body">
      <transition-group name="list" tag="div">
        <ListItem v-for="(item, index) in list" 
                  @remove-item="removeItem"
                  :key="'item' + index" 
                  :item="item"
                  :index="index"
                  />
      </transition-group>
    </div>
  </div>
</template>

<script>
import ListItem from '@/components/ListItem'
export default {
  name: 'list-item',
  components: { ListItem },
  props: {
    quadrant: Object,
    index: Number,
    list: Array
  },
  methods: {
    addItem (index, type, e) {
      // window.console.log(type);
      window.console.log(e);
      this.$emit('add-item', index, type);
    },

    removeItem (index) {
      // alert(index);
      this.list.splice(index, 1)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/scss/app";

.quad {
  width: calc(50% - 10px);
  height: calc(50% - 10px);
  background-color: $color-quadrant;
  border: 1px solid $color-border;
  border-radius: $border-radius;
  box-shadow: 0 5px 9px rgba(black, .05), 0 4px 4px -2px rgba(black, .15);

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 12px;
    height: 50px;
    border-radius: $border-radius $border-radius 0 0;
    border-bottom: 1px solid $color-border;
    background-image: linear-gradient(to bottom, #fff, #fafafa);
    font-weight: bold;
    font-size: 14px;
  }

  &__add {
    position: relative;
    width: 26px;
    height: 26px;
    border-radius: 30px;
    box-shadow: 0 5px 5px -2px rgba(black, .2);
    transition: all .25s $easeInOutQuart;

    &:hover {
      transform: scale(1.1);
      box-shadow: 0 8px 5px -2px rgba(black, .2);
    }

    &:before {
      content: "";
      position: absolute;
      width: 50%;
      height: 2px;
      background-color: white;
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
    }

    &:after {
      content: "";
      position: absolute;
      width: 50%;
      height: 2px;
      background-color: white;
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%) rotate(90deg);
    }
  }

  &__body {
    height: calc(100% - 50px);
    overflow: scroll;
  }

  &--good {
    .quad__add {
      background-color: $color-good;
    }

    .quad__header {
      border-bottom: 2px solid $color-good;
    }
  }

  &--bad {
    .quad__add {
      background-color: $color-bad;
    }

    .quad__header {
      border-bottom: 2px solid $color-bad;
    }
  }

  &--question {
    .quad__add {
      background-color: $color-question;
    }

    .quad__header {
      border-bottom: 2px solid $color-question;
    }
  }

  &--next {
    .quad__add {
      background-color: $color-next;
    }

    .quad__header {
      border-bottom: 2px solid $color-next;
    }
  }
}
</style>
