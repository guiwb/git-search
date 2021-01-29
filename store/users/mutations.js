export default {
  setUsers(state, payload) {
    const isFirstPage = state.since === 0 && state.page === 1
    state.users = isFirstPage ? payload : [...state.users, ...payload]
  },
  setTextSearch(state, payload) {
    state.since = 0
    state.page = 1
    state.textSearch = payload
  },
  setSince(state, payload) {
    state.since = payload
  },
  setPage(state, payload) {
    state.page = payload
  },
  setTitle(state, payload) {
    state.title = payload
  },
}
