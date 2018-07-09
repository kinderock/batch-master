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
      dynamic : false

    };
  },

  created() {
    /*
    document.addEventListener('vue_mounted', () => {
      BM.request({'userinfo': 'zzz'}).then(response => {
        console.log('response', response);
      });
    }, false);
    */
  }
};
</script>

<style scoped>

</style>
