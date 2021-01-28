<template>
  <main>
    <img src="/images/logo.svg" width="140px" alt="Github Logo" />
    <h1>GitSearch</h1>
    <SearchInput />
    <div class="row">
      <Button to="/users" @click.native="setTextSearch('')">Ver todos</Button>
      <Button to="/users" color="secondary">Buscar</Button>
    </div>
  </main>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  head() {
    return {
      title: 'GitSearch',
    }
  },
  methods: {
    ...mapMutations('users', ['setTextSearch']),
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
