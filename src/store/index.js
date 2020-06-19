import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    packages: []
  },
  mutations: {
    updatePackages(state, data) {
      state.packages = data;
    }
  },
  actions: {
    async getAllPackages(store, searchString) {
      try {
        const response = await fetch(`https://registry.npmjs.org/-/v1/search?text=
          ${searchString}`);
        const json = await response.json();
        store.commit("updatePackages", json.objects);
      } catch (error) {
        console.log(error);
      }
    }
  },
  modules: {}
});
