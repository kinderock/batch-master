const user = {
  namespaced: true,
  state: {
    status: null,
    name: null
  },
  mutations: {
    setUserStatus(state, userstatus) {
      state.status = userstatus;
    },

    setUserName(state, username) {
      state.name = username;
    }
  }
}
export default user
