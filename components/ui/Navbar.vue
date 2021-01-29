<template>
  <nav>
    <n-link to="/" class="logo">
      <img src="/images/logo.svg" alt="Logo" height="50px" />
      GitSearch
    </n-link>

    <div class="mobile">
      <img src="/images/comeback.svg" height="15px" @click="$router.back()" />
      <h1 v-text="title" />
    </div>
  </nav>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState('users', ['title']),
  },
}
</script>

<style lang="scss" scoped>
nav {
  display: flex;
  align-items: center;
  height: 50px;
  border-bottom: 1px solid $gray200;
  margin: 0 10px 15px 10px;

  @media ($desktop) {
    justify-content: center;
    background-color: white;
    padding: 5px 0;
    margin: 0 0 40px 0;
    border: none;
    box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.1);
  }

  .logo {
    color: black;
    display: none;
    align-items: center;
    font-size: 20px;
    font-weight: bold;
    width: 780px;

    img {
      margin-right: 5px;
    }

    @media ($desktop) {
      display: flex;
    }
  }

  .mobile {
    h1 {
      font-size: 14px;
      font-weight: 600;
      margin: 0 0 0 15px;
    }

    @media ($desktop) {
      display: none;
    }
  }
}
</style>
