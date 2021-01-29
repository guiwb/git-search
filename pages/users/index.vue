<template>
  <section>
    <SearchInput with-debounce @search="searchUsers" />
    <UsersList :users="users" />
  </section>
</template>

<script>
import { mapActions, mapState, mapMutations } from 'vuex'

export default {
  layout: 'container',
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
    this.setTitle(this.title)
    if (!this.users.length) this.fetchUsers()
    document.addEventListener('scroll', this.checkScroll)
  },
  destroyed() {
    document.removeEventListener('scroll', this.checkScroll)
  },
  methods: {
    ...mapActions('users', ['fetchUsers']),
    ...mapMutations('users', ['setSince', 'setTitle']),
    searchUsers() {
      this.setSince(0)
      this.fetchUsers()
    },
    checkScroll() {
      const { scrollY, innerHeight } = window
      const { offsetHeight } = document.documentElement

      if (scrollY + innerHeight === offsetHeight) this.fetchUsers()
    },
  },
}
</script>
