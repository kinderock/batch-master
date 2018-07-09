const navigation = {
  namespaced: true,
  state: {
    items: null
  },
  mutations: {
    setMenuItems(state, items) {
      state.items = items;
    },
  }
}
export default navigation;
