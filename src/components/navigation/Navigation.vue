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
    window.BM.request({'navigation':'bar'}).then((response) => {
      console.log(response);
    });
  }
};
</script>

<style scoped>

</style>
