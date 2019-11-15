<template>
  <div class="home">
    <transition name="fade">
      <Modal v-if="modalVisible"
            @hide-modal="hideModal"
            @create-new-item="createNewItem"
            :quadrant="quadrantData"
            :index="currentModalIndex"
             />
    </transition>
    <Quadrant v-for="(quadrant, index) in quadrantData" 
              :key="'quad'+index" 
              :index="index"
              :quadrant="quadrant"
              :list="lists[index]"
              @add-item="addItem"
              />
  </div>
</template>

<script>
import Quadrant from '@/components/Quadrant';
import Modal from '@/components/Modal';
export default {
  name: 'home',
  data () {
    return {
      modalVisible: false,
      currentModalIndex: null,
      quadrantData: [
        {
          title: "Things that went well",
          addTitle: "Add new \"Thing that went well\"",
          class: "good"
        },
        {
          title: "Things that could be better",
          addTitle: "Add new \"Thing that could be better\"",
          class: "bad"
        },
        {
          title: "Questions for discussion",
          addTitle: "Add new \"Question for discussion\"",
          class: "question"
        },
        {
          title: "Action items",
          addTitle: "Add new \"Action item\"",
          class: "next"
        }
      ],
      lists: [
        [
        ],
        [
        ],
        [
        ],
        [
        ],
      ],
    }
  },
  components: {
    Quadrant,
    Modal
  },
  methods: {
    addItem (index, type) {
      window.console.log(type);
      this.showModal(index);
    },

    showModal (index) {
      this.currentModalIndex = index;
      this.modalVisible = true;
    },

    hideModal () {
      this.modalVisible = false;
    },

    createNewItem (index, author, description) {
      this.lists[index].push({
        author,
        description
      });

      this.hideModal();
      // window.console.log(index);
    }
  }
}
</script>

<style lang="scss">
.home {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  height: calc(100% - 60px);
  margin-top: 60px;
}
</style>