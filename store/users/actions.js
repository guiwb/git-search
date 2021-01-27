export default {
  fetchUsers({ state, dispatch }) {
    state.textSearch ? dispatch('getUsersByName') : dispatch('getUsers')
  },
  async getUsersByName({ state, commit }) {
    const res = await this.$http.$get(
      `search/users?q=${state.textSearch}&per_page=${state.itemsPerPage}&page=${state.page}`
    )

    commit('setUsers', res.items)
    commit('setPage', state.page + 1)
  },
  async getUsers({ commit, state }) {
    const res = await this.$http.$get(
      `users?per_page=${state.itemsPerPage}&since=${state.since}`
    )

    commit('setUsers', res)

    const { id: newSince } = res[res.length - 1]
    commit('setSince', newSince)
  },
  resetUsers({ dispatch, commit }) {
    commit('setPage', 1)
    commit('setSince', 0)
    commit('setTextSearch', '')
    dispatch('fetchUsers')
  },
}
