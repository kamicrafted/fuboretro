<template>
  <div class="home">
    <Header @export-retro="exportRetro" />

    <transition name="fade">
      <Modal v-if="modalVisible"
            @hide-modal="hideModal"
            @create-new-item="createNewItem"
            @update-item="updateItem"
            :quadrantData="quadrantData"
            :quadrantIndex="currentQuadrantIndex"
            :id="currentItemID"
            :error-message="errorMsg"
            :description="editDescription"
             />
    </transition>

    <Quadrant v-for="(quadrant, quadrantIndex) in quadrantData" 
              :key="'quad'+quadrantIndex" 
              :quadrantIndex="quadrantIndex"
              :quadrant="quadrant"
              :list="lists[quadrantIndex]"
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
      currentQuadrantIndex: null,
      description: "",
      currentItemID: null,
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
    },

    editDescription () {
      window.console.log('Editing description for ' + this.description);
      if (this.description) {
        return this.description
      } else {
        return ""
      }
    }
  },
  methods: {
    addItem (itemIndex, type) {
      this.showModal(itemIndex, type);
    },

    createNewItem (id, index, author, description) {
      window.console.log(author + ' is adding "' + description + '" to quadrant ' + index + ' item ' + id);
      // this.id = this.$store.state.lists[this.index].length;

      if (description) {
        this.$store.commit('addItemToList', {
          id,
          index, 
          author, 
          description
        })

        this.hideModal();
      } else {
        this.errorMsg = "Please enter a description"
      }
    },

    editItem (itemIndex, quadrantIndex) {
      this.description = this.$store.state.lists[quadrantIndex][itemIndex].description;
      this.showModal(quadrantIndex, null, this.description, itemIndex);
    },

    updateItem (quadrant, id, description) {
      this.$store.state.lists[quadrant][id].description = description;

      this.hideModal();
    },

    showModal (quadrantIndex, type, description, id) { // clicking on item should pass through description value as part of event. if it exists, then pass into edit modal
      this.currentQuadrantIndex = quadrantIndex;
      this.modalVisible = true;

      if (type == null) {
        this.description = description;
        this.currentItemID = id;

        window.console.log('***** ' + this.currentItemID);
      }

      window.console.log('DSC: ' + description)

      window.console.log('Opened Modal for Quadrant: ' + quadrantIndex, '( ' + type, '), Description: ' + description);
    },

    hideModal () {
      this.modalVisible = false;
      window.console.log('Closed Modal')
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