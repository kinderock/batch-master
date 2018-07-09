<template>
  <ul>
    <!-- <li>asdasd</li> -->
    <li v-for="item in items">{{ item }}</li>
  </ul>
</template>

<script>
export default {
  name: "Navigation",

  data() {
    return {
      items: ["Item 1", "Item 2", "Item 3"],
      dynamic : true
    };
  },

  created() {
    document.addEventListener('vue_mounted', () => {
      BM.request({'navigation': 'zzz'}).then(response => {
        console.log('response', response);
      });
    }, false);
  }
};
</script>

<style scoped>

</style>
