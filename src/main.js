// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';

import store from './store/index.js'
import BatchMaster from './api/BatchMaster';


window.BM = new BatchMaster();

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
    console.log('created');
  },
  mounted () {
    window.BM.setRequestCount(this.$children.length);
    console.log('mounted');
    console.log(this);
  }
});
