<template>
  <div>
    <p>User Info</p>
    <ChildUserInfo/>
  </div>

</template>

<script>
import ChildUserInfo from "./blocks/ChildUserInfo";
export default {
  name: "Userinfo",
  components: {ChildUserInfo},
  data() {
    return {

    };
  },

  mounted() {
    // window.BM.request({'userinfo':'bar'});
    window.addEventListener('InitVueComponents', () => {
      this.sendRequest();
    });
  },

  methods: {
    sendRequest() {
      window.BM.request({'userinfo':'bar'});
    }
  }
};
</script>

<style scoped>

</style>
