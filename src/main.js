import Vue from 'vue';
import Vuex from 'vuex';

import store from './store/index.js'
import BatchMaster from './api/BatchMaster';

window.BM = new BatchMaster();
console.log(BM);
console.log(BM.request);
Vue.use(Vuex);
Vue.config.productionTip = false;

Vue.component('navigation', require('./components/navigation/Navigation.vue').default);
Vue.component("userinfo", require("./components/userinfo/UserInfo.vue").default);


const INIT_VUE_COMPONENTS = new Event('InitVueComponents');
const app = new Vue({
  el: '#app',
  store,
  created () {
  },
  beforeMount () {

  },
  mounted () {
    window.BM.setRequestCount(this.$children.filter(item => item.dynamic));
    document.dispatchEvent(INIT_VUE_COMPONENTS);
  }
});
