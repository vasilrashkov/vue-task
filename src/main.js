import Vue from "vue";
import Vuex from "vuex";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import { store } from "./store/store";
import api from "./api/api";
import { FETCH_CITIES, FETCH_OFFICESS } from "./store/actions";
Vue.use(Vuex);

Vue.config.productionTip = false;
Vue.prototype.$api = api;

const vuexStore = new Vuex.Store(store);

new Vue({
  vuetify,
  store: vuexStore,
  render: (h) => h(App),
  beforeCreate() {
    this.$store.dispatch(FETCH_OFFICESS, this.$api);
    this.$store.dispatch(FETCH_CITIES, this.$api);
  },
}).$mount("#app");
