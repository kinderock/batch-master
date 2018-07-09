// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';

import store from './store/index.js'
import BatchMaster from './api/BatchMaster';

console.log(BatchMaster);
window.BM = new BatchMaster();
console.log(BM);
console.log(BM.request);
Vue.use(Vuex);
Vue.config.productionTip = false;

Vue.component('navigation', require('./components/navigation/Navigation.vue').default);
Vue.component("userinfo", require("./components/userinfo/UserInfo.vue").default);

// console.log('==BM', BM);


/* eslint-disable no-new */
const app = new Vue({
  el: '#app',
  store,
  created () {
  },
  beforeMount () {

  },
  mounted () {
    window.BM.setRequestCount(this.$children.filter(item => item.dynamic).length);
    console.log(this.$children);
    var event = new Event('vue_mounted');
    document.dispatchEvent(event);
  }
});
