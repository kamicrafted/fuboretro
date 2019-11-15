<template>
  <div class="home">
    <Header @export-retro="exportRetro" />
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
import Header from '@/components/Header';
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
    }
  },
  components: {
    Quadrant,
    Modal,
    Header
  },
  computed: {
    lists () {
     return this.$store.state.lists
    }
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
      window.console.log("Crreating new item!");
      this.$store.commit('addItemToList', {
        index, 
        author, 
        description
      })
      // this.lists[index].push({
      //   author,
      //   description
      // });

      this.hideModal();
      // window.console.log(index);
    },

    exportRetro () {
      window.console.log("-----------------------------------------");
      window.console.log(this.lists);
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
  height: calc(100% - 50px);
  margin-top: 50px;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 20px;
}
</style>