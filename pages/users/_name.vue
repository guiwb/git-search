<template>
  <section>
    <div class="content">
      <Profile :user="user" />
      <Tabs :user="user" />
    </div>
  </section>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  layout: 'profile',
  async asyncData({ params, $http }) {
    const user = await $http.$get(`users/${params.name}`)
    return { user }
  },
  data() {
    return {
      title: 'Perfil',
    }
  },
  head() {
    return {
      title: this.title,
    }
  },
  mounted() {
    this.setTitle(this.title)
  },
  methods: {
    ...mapMutations('users', ['setTitle']),
  },
}
</script>
