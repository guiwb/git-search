<template>
  <section>
    <Navbar :title="title" />
    <div class="content">
      <div class="cover"></div>
      <img class="profile-picture" :src="user.avatar_url" :alt="user.login" />
      <h1 v-text="user.name" />

      <h4>
        <img src="/images/user.svg" height="10px" :alt="user.login" />
        {{ user.login }}
      </h4>

      <div class="stats">
        <div>
          <img src="/images/following.svg" width="9px" alt="Seguindo" />
          <span>{{ user.following }}</span>
          <div>Seguindo</div>
        </div>

        <div>
          <img src="/images/projects.svg" width="20px" alt="Projetos" />
          <span>{{ user.public_repos }}</span>
          <div>Projetos</div>
        </div>

        <div>
          <img src="/images/followers.svg" width="20px" alt="Seguidores" />
          <span>{{ user.followers }}</span>
          <div>Seguidores</div>
        </div>
      </div>

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
import Projects from '../../components/User/Projects'
import About from '../../components/User/About'

export default {
  components: {
    Projects,
    About,
  },
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
}
</script>

<style lang="scss" scoped>
section {
  margin: 0 10px;

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;

    .cover {
      width: 100%;
      height: 145px;
      background: url('../../static/images/cover.png') no-repeat center;
      background-size: cover;
      border-radius: 8px;
    }

    .profile-picture {
      width: 120px;
      height: 120px;
      border-radius: 120px;
      object-fit: cover;
      object-position: center;
      border: 5px solid $blue200;
      margin-top: -80px;
    }

    h1 {
      font-size: 24px;
      font-weight: 600;
      color: $purple400;
      margin: 10px 0;
    }

    h4 {
      font-size: 16px;
      font-weight: 400;
      color: $gray400;
      margin: 0;
    }

    .stats {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 14px;
      font-weight: 600;
      color: $purple400;
      width: calc(100% - 40px);
      padding: 0 20px;
      margin-top: 28px;

      > div {
        text-align: center;
      }
    }

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
