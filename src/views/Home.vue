<template>
  <div class="home">
    <Header @export-retro="exportRetro" />

    <transition name="fade">
      <Modal v-if="modalVisible"
            @hide-modal="hideModal"
            @create-new-item="createNewItem"
            :quadrant="quadrantData"
            :index="currentModalIndex"
            :error-message="errorMsg"
             />
    </transition>

    <Quadrant v-for="(quadrant, index) in quadrantData" 
              :key="'quad'+index" 
              :index="index"
              :quadrant="quadrant"
              :list="lists[index]"
              @add-item="addItem"
              @edit-item="editItem"
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
      description: "",
      errorMsg: "",
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
      this.showModal(index, type);
    },

    editItem (index, type, description) {
      window.console.log(index, type, description);
      this.showModal(index, type, description);
    },

    createNewItem (index, author, description) {
      window.console.log(author + ' is adding "' + description + '" to quadrant ' + index);

      if (description) {
        this.$store.commit('addItemToList', {
          index, 
          author, 
          description
        })

        this.hideModal();
      } else {
        this.errorMsg = "Please enter a description"
      }
      // window.console.log(index);
    },

    showModal (index, type, description) {
      this.currentModalIndex = index;
      this.modalVisible = true;

      window.console.log('item: ' + index, ', quadrant: ' + type, ', description: ' + description);
    },

    hideModal () {
      this.modalVisible = false;
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
</style>