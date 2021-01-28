<template>
  <section>
    <h1>Bio</h1>
    <p v-text="bio" />

    <div v-if="user.location">
      <img src="/images/location.svg" width="18px" alt="location" />
      {{ user.location }}
    </div>

    <div v-if="user.blog">
      <img src="/images/site.svg" width="18px" alt="site" />
      {{ user.blog }}
    </div>
  </section>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  computed: {
    bio() {
      return this.user.bio || 'Esse usuário não possui bio 😕'
    },
  },
}
</script>

<style lang="scss" scoped>
section {
  padding-bottom: 30px;
  width: 100%;

  h1 {
    font-size: 18px;
    font-weight: 600;
    color: $purple400;
    margin-top: 30px;
  }

  p {
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 30px;
    line-height: 22px;
  }

  div {
    display: flex;
    align-items: center;
    font-size: 16px;
    font-weight: 600;
    color: $purple400;
    margin: 10px 0;

    img {
      margin-right: 10px;
    }
  }
}
</style>
