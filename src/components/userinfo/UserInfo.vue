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

  created() {
    window.BM.request({'userinfo':'bar'}).then((response) => {
      console.log(response);
    });
  }
};
</script>

<style scoped>

</style>
