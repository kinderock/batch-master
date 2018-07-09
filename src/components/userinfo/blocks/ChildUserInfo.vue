<template>
  <div>Имя пользователя: {{ name }}</div>
</template>

<script>
  export default {
    name: "ChildUserInfo",

    props: {
      name: String
    },

    data() {
      return {

      };
    },

    created() {
      
    }
  };
</script>

<style scoped>

</style>
