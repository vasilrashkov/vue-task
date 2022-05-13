import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

const initialState = {};

export const store = new Vuex.Store({
  state() {
    return {
      ...initialState,
    };
  },
  mutations: {},
});
