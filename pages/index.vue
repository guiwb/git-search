<template>
  <main>
    <img src="/images/logo.svg" width="140px" alt="Github Logo" />
    <h1>GitSearch</h1>
    <SearchInput />
    <div class="row">
      <Button @click="seeAll()">Ver todos</Button>
      <Button color="secondary" @click="search">Buscar</Button>
    </div>
  </main>
</template>

<script>
import { mapMutations, mapActions, mapState } from 'vuex'
export default {
  head() {
    return {
      title: 'GitSearch',
    }
  },
  computed: {
    ...mapState('users', ['textSearch']),
  },
  methods: {
    ...mapMutations('users', ['setTextSearch']),
    ...mapActions('users', ['resetUsers']),
    search() {
      if (!this.textSearch)
        return this.$toast.error('Você precisa informar um texto de busca!')
      else if (this.textSearch.length < 4)
        return this.$toast.error(
          'O texto de busca deve ter mais que 3 caracteres!'
        )

      this.resetUsers()
      this.$router.push('/users')
    },
    seeAll() {
      this.setTextSearch('')
      this.resetUsers()
      this.$router.push('/users')
    },
  },
}
</script>

<style lang="scss" scoped>
main {
  height: 100vh;
  width: 274px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;

  h1 {
    font-size: 30px;
    font-weight: 600;
  }

  .row {
    width: 100%;
    display: flex;

    > a {
      flex: 1;

      &:first-child {
        margin-left: 0;
      }

      &:last-child {
        margin-right: 0;
      }
    }
  }

  @media ($desktop) {
    width: 420px;
  }
}
</style>
