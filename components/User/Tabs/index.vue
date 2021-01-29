<template>
  <section>
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
  </section>
</template>

<script>
import Projects from './Projects'
import About from './About'

export default {
  components: {
    Projects,
    About,
  },
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      activeTab: 'About',
    }
  },
}
</script>

<style lang="scss" scoped>
section {
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
</style>
