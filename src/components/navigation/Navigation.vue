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
      items: ["Item 1", "Item 2", "Item 3"]
    };
  },

  created() {
    console.log('this --', this);
    console.log('window --', window);
    console.log('BM --', BM);
  }
};
</script>

<style scoped>

</style>
