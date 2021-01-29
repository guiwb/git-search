<template>
  <section>
    <div class="content">
      <Profile :user="user" />
      <Stats :user="user" />

      <div class="tabs">
        <div
          :class="{ active: activeTab === 'About' }"
          @click="activeTab = 'About'"
        >
          Sobre
        </div>
        <div
          :class="{ active: activeTab === 'Projects' }"
          @click="activeTab = 'Projects'"
        >
          Projetos
        </div>
      </div>

      <component :is="activeTab" :user="user" class="tab-content" />
    </div>
  </section>
</template>

<script>
import { mapMutations } from 'vuex'
import Projects from '../../components/User/Projects'
import About from '../../components/User/About'

export default {
  components: {
    Projects,
    About,
  },
  layout: 'container',
  async asyncData({ params, $http }) {
    const user = await $http.$get(`users/${params.name}`)
    return { user }
  },
  data() {
    return {
      title: 'Perfil',
      activeTab: 'About',
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

<style lang="scss" scoped>
section {
  margin: 0 10px;

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;

    .tabs {
      display: flex;
      width: 100%;
      border-radius: 8px;
      overflow: hidden;
      height: 50px;
      margin-top: 30px;

      > div {
        flex: 1;
        text-align: center;
        line-height: 50px;
        background-color: $blue100;
        color: black;
        font-size: 16px;
        font-weight: 500;

        &:first-child {
          border-right: 1px solid $blue200;
        }

        &.active {
          border-bottom: 3px solid $blue300;
        }
      }
    }

    .tab-content {
      width: calc(100% - 40px);
    }
  }
}
</style>
