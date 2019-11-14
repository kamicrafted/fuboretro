<template>
  <div class="quad" :class="'quad--' + className">
    <div class="quad__header">
      <h2>{{ sectionName }}</h2>
      <div class="quad__add" @click="addItem(className, $event)"></div>
    </div>
    <div class="quad__body">
      <ListItem v-for="n in 50" :key="'item' + n" />
    </div>
  </div>
</template>

<script>
import ListItem from '@/components/ListItem'
export default {
  name: 'HelloWorld',
  components: { ListItem },
  props: {
    sectionName: String,
    className: String
  },
  methods: {
    addItem (type, e) {
      window.console.log(type);
      window.console.log(e);
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/scss/app";

.quad {
  width: calc(50vw - 20px);
  height: calc(50vh - 20px);
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
