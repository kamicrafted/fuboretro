<template>
  <div class="modal" @click="hideModal">
    <div class="modal__surface" @click.stop>
      <div class="modal__header">
        <h2>{{ quadrant[index].addTitle }}</h2>
      </div>
      <div class="modal__body">
        <div class="field__group">
          <label for="name">Name</label>
          <!-- <input name="name" type="text" v-model="author"> -->

          <select name="author" id="author" v-model="selectedUser">
            <option v-for="user in userList" :key="user.name" :value="user.name">{{ user.name }}</option>
          </select>
        </div>
        <div class="field__group">
          <VEmojiPicker
            v-show="showEmoji"
            :pack="emojisNative"
            labelSearch="Search"
            class="emoji"
            @select="onSelectEmoji"
          />
          <div class="emoji__toggle" @click="toogleDialogEmoji"></div>

          <label for="description">Description</label>
          <textarea name="description" rows="10" v-model="description" ref="description"></textarea>
        </div>
      </div>
      <div class="modal__footer">
        <p class="error">
          {{ errorMessage }}
        </p>
        <button @click="createNewItem(index, selectedUser, description)" class="button" :class="'button--'+quadrant[index].class">Add</button>
      </div>
    </div>
  </div>
</template>

<script>
import VEmojiPicker from "v-emoji-picker";
import packEmoji from "v-emoji-picker/data/emojis.js";

export default {
  name: 'modal',
  data () {
    return {
      // description: this.$store.state.lists[this.index],
      description: "",
      selectedUser: this.$store.state.user,
      pack: packEmoji,
      showEmoji: false 
    }
  },
  props: {
    quadrant: Array,
    index: Number,
    errorMessage: String,
    contentForEdit: String,
    labelSearch: { type: String, default: 'Pesquisar...' },
    showCategory: { type: Boolean, default: true },
    emojisByRow: { type: Number, default: 5}
  },
  components: {
    VEmojiPicker
  },
  computed: {
    author () {
      return this.selectedUser;
    },
    userList () {
      return this.$store.state.users;
    },
    emojisNative() {
      return packEmoji;
    }
  },

  methods: {
    hideModal () {
      this.$emit('hide-modal');
    },

    createNewItem (index, author, description) {
      this.$emit('create-new-item', index, author, description);
    },

    updateAuthor () {
      window.consle.log('sdf');
    },

    toogleDialogEmoji() {
      this.showEmoji = !this.showEmoji;
    },
    
    onSelectEmoji(dataEmoji) {
      this.description += dataEmoji.emoji;
      this.toogleDialogEmoji();
    }
  },

  mounted () {
    this.$nextTick(() => this.$refs.description.focus());
  }
}
</script>

<style lang="scss" scoped>
.emoji {
  position: absolute;
  z-index: 10;
  bottom: 10px;
  right: 10px;
  box-shadow: 0 5px 10px rgba(black, .25);

  &__toggle {
    position: absolute;
    z-index: 1;
    right: 10px;
    bottom: 10px;
    width: 24px;
    height: 24px;
    background-color: grey;
  }
}
</style>