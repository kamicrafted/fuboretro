import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // local user
    user: "",
    // stores each user ID
    users: [],
    // stores items for each quadrant
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
  },
  mutations: {
    addItemToList: (state, payload) => {
      state.lists[payload.index].push({
        'id': payload.id,
        'quadrant': payload.index,
        'author': payload.author,
        'description': payload.description
      });

      window.console.log(state.lists[payload.index]);
    },

    updateItem: (state, payload) => {
      window.console.log('Before update: ' + state.lists[payload.index][payload.id].description);

      state.lists[payload.index][payload.id].description = payload.description;

      window.console.log('After update: ' + state.lists[payload.index][payload.id].description);
    },

    saveUser: (state, user) => {
      state.user = user;

      // add to user list
      state.users.push({
        'name': state.user,
        'id': state.users.length
      });

      window.console.log(state.users);
    }
  },
  actions: {
  },
  modules: {
  }
})
