import Vue from 'vue';
import Vuex from 'vuex';

import store from './store/index.js'
import BatchMaster from './api/BatchMaster';


Vue.use(Vuex);
Vue.config.productionTip = false;
Vue.prototype.$batchMaster = BatchMaster;
Vue.component('navigation', require('./components/navigation/Navigation.vue').default);
Vue.component("userinfo", require("./components/userinfo/UserInfo.vue").default);


const INIT_VUE_COMPONENTS = new Event('InitVueComponents');
const app = new Vue({
  el: '#app',
  store,
  mounted () {
    this.$batchMaster.setRequestCount(this.$children.filter(item => item.dynamic).length);
    document.dispatchEvent(INIT_VUE_COMPONENTS);
  }
});
