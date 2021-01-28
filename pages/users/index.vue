<template>
  <section>
    <Navbar :title="title" />
    <SearchInput with-debounce @search="searchUsers" />
    <UsersList :users="users" />
  </section>
</template>

<script>
import { mapActions, mapState, mapMutations } from 'vuex'

export default {
  data() {
    return {
      title: 'Lista de usuários',
    }
  },
  head() {
    return {
      title: this.title,
    }
  },
  computed: {
    ...mapState('users', ['users']),
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
    ...mapActions('users', ['fetchUsers']),
    ...mapMutations('users', ['setSince']),
    searchUsers() {
      this.setSince(0)
      this.fetchUsers()
    },
  },
}
</script>

<style lang="scss" scoped>
section {
  margin: 0 10px;
}
</style>
