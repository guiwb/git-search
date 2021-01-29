<template>
  <section class="content">
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
.content {
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ($desktop) {
    flex-direction: row;
    align-items: flex-start;
    margin-top: -50px;
  }

  .tabs {
    display: flex;
    width: 100%;
    border-radius: 8px;
    overflow: hidden;
    height: 50px;
    margin-top: 30px;
    cursor: pointer;

    @media ($desktop) {
      flex-direction: column;
      min-width: 200px;
      width: 200px;
      height: auto;
      border-radius: 0;
      margin-top: 70px;
    }

    > div {
      flex: 1;
      text-align: center;
      line-height: 50px;
      background-color: $blue100;
      color: black;
      font-size: 16px;
      font-weight: 500;

      &:last-child {
        border-left: 1px solid $blue200;

        @media ($desktop) {
          border-left: 0;
          border-top: 1px solid $blue200;
        }
      }

      &.active {
        border-bottom: 3px solid $blue300;

        @media ($desktop) {
          border-right: 3px solid $blue300;
          border-bottom: 0;
        }
      }
    }
  }

  .tab-content {
    width: calc(100% - 40px);

    @media ($desktop) {
      width: auto;
      border-left: 1px solid $gray200;
      padding: 0 30px 30px;
    }
  }
}
</style>
