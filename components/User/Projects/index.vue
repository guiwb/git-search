<template>
  <div v-if="repos.length">
    <Item v-for="repo in repos" :key="repo.id" :repo="repo" />
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
