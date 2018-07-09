<template>
  <ul>
    <li v-for="item in getNavigationItems">{{ item }}</li>
  </ul>
</template>

<script>
import navigation from '../../store/navigation/index';

export default {
  name: "Navigation",

  data() {
    return {
      dynamic: true
    };
  },

  computed: {
    getNavigationItems() {
      return this.$store.state.navigation.items
    }
  },


  created() {
    let request_data = {
      component: 'navigation',
      method: 'pleaseMakeSomething',
      data: {
        items: ["Главная", "Об игре", "Пополнить счет"]
      }
    };

    this.$store.registerModule('navigation', navigation);

    document.addEventListener('InitVueComponents', () => {
      BM.request(request_data).then(response => {
        let data = BM.getCurrentComponentData('navigation', response);
        this.$store.commit('navigation/setMenuItems', data.items);
      });
    }, false);
  }
};
</script>

<style scoped>

</style>
