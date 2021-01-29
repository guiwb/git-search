<template>
  <section>
    <div class="cover" />
    <img class="profile-picture" :src="user.avatar_url" :alt="user.login" />
    <h1 v-text="user.name" />

    <h4>
      <img src="/images/user.svg" height="10px" :alt="user.login" />
      {{ user.login }}
    </h4>
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
}
</script>

<style lang="scss" scoped>
section {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

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
    width: 80%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
  }
}
</style>
