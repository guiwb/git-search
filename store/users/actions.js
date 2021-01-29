export default {
  fetchUsers({ state, dispatch }) {
    state.textSearch ? dispatch('getUsersByLogin') : dispatch('getUsers')
  },
  async getUsersByLogin({ state, commit }) {
    const res = await this.$http.$get(
      `search/users?q=${state.textSearch}+in:login&per_page=${state.itemsPerPage}&page=${state.page}`
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
  resetUsers({ commit }) {
    commit('setUsers', [])
    commit('setPage', 1)
    commit('setSince', 0)
  },
}
