<template>
  <section>
    <Navbar :title="title" />
    <SearchInput v-model="text" />
    <UsersList :users="users" />
  </section>
</template>

<script>
import { mapActions, mapState, mapMutations } from 'vuex'

export default {
  data() {
    return {
      title: 'Lista de usuários',
      text: this.textSearch,
      timeout: null,
    }
  },
  head() {
    return {
      title: this.title,
    }
  },
  computed: {
    ...mapState('users', ['textSearch', 'users']),
  },
  watch: {
    text(newValue) {
      if (!newValue) return this.resetUsers()
      this.createDebounce()
    },
  },
  mounted() {
    this.fetchUsers()

    document.addEventListener('scroll', () => {
      const { scrollY, innerHeight } = window
      const { offsetHeight } = document.documentElement

      if (scrollY + innerHeight === offsetHeight) this.fetchUsers()
    })
  },
  methods: {
    ...mapActions('users', ['fetchUsers', 'resetUsers']),
    ...mapMutations('users', ['setSince', 'setTextSearch']),
    searchUsers() {
      this.setSince(0)
      this.setTextSearch(this.text)
      this.fetchUsers()
    },
    createDebounce() {
      if (this.timeout) clearTimeout(this.timeout)

      if (this.text.length < 4) return
      this.timeout = setTimeout(this.searchUsers, 1000)
    },
  },
}
</script>

<style lang="scss" scoped>
section {
  margin: 0 10px;
}
</style>
