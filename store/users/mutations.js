export default {
  setUsers(state, payload) {
    const isFirstPage = state.since === 0 && state.page === 1

    if (isFirstPage) {
      state.users = payload
      return
    }

    const removesExisting = (users) => {
      const ids = state.users.map((user) => user.id)
      return users.filter((user) => !ids.includes(user.id))
    }

    state.users = [...state.users, ...removesExisting(payload)]
  },
  setTextSearch(state, payload) {
    state.textSearch = payload
  },
  setSince(state, payload) {
    state.since = payload
  },
  setPage(state, payload) {
    state.page = payload
  },
}
