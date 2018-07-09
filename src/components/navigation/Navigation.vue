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

  mounted() {
    // console.log('BM -', BM);
    // window.BM.request({'navigation':'bar'});
    window.addEventListener('InitVueComponents', () => {
      this.sendRequest();
    });
  },

  methods: {
    sendRequest() {
      window.BM.request({'navigation':'bar'});
    }
  }
};
</script>

<style scoped>

</style>
