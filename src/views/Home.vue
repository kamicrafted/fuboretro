<template>
  <div class="home">
    <Quadrant v-for="(quadrant, index) in quadrants" 
              :key="'quad'+index" 
              :sectionName="quadrant.name"
              :className="quadrant.class"
              />
  </div>
</template>

<script>
import Quadrant from '@/components/Quadrant';
export default {
  name: 'home',
  data () {
    return {
      quadrants: [
        {
          name: "Things that went well",
          class: "good"
        },
        {
          name: "Things that could be better",
          class: "bad"
        },
        {
          name: "Questions for discussion",
          class: "question"
        },
        {
          name: "Action items",
          class: "next"
        }
      ]
    }
  },
  components: {
    Quadrant
  }
}
</script>

<style lang="scss">
  .home {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    height: 100%;
  }
</style>