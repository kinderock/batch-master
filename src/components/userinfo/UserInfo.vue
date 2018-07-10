<template>
  <div>
    <p>Статус пользоватея: {{ getUserStatus }}</p>
    <ChildUserInfo :name="getUserName"/>
  </div>

</template>

<script>
import user from '../../store/user/index';

import ChildUserInfo from "./blocks/ChildUserInfo";
export default {
  name: "Userinfo",
  components: {ChildUserInfo},
  data() {
    return {
      dynamic: true
    };
  },

  computed: {
    getUserStatus() {
      return this.$store.state.user.status
    },

    getUserName() {
      return this.$store.state.user.name
    }
  },

  created() {
    let request_data = {
      component: 'user',
      method: 'pleaseMakeSomething',
      data: {
        status: 'member',
        name: 'John Doe'
      }
    };

    this.$store.registerModule('user', user);

    document.addEventListener('InitVueComponents', () => {
      this.$batchMaster.request(request_data).then(response => {
        let data = this.$batchMaster.getCurrentComponentData('user', response);

        this.$store.commit('user/setUserStatus', data.status);
        this.$store.commit('user/setUserName', data.name);
      });
    }, false);
  }
};
</script>

<style scoped>

</style>
