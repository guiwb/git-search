<template>
  <div v-if="repos.length">
    <Item v-for="repo in repos" :key="repo.id" :repo="repo" />
  </div>
  <div v-else>
    <div class="no-data">Esse usuário não possui repositórios 😕</div>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      repos: [],
    }
  },
  async fetch() {
    this.repos = await this.$http.$get(`users/${this.user.login}/repos`)
  },
}
</script>

<style scoped>
.no-data {
  font-size: 12px;
  text-align: center;
  margin: 30px 0;
}
</style>
