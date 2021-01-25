<template>
  <n-link :to="`/user/${user.login}`">
    <img :src="user.avatar_url" :alt="user.login" />
    <h1 v-text="user.login" />
  </n-link>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true,
      validator: (value) => 'avatar_url' in value && 'login' in value,
    },
  },
}
</script>

<style lang="scss" scoped>
a {
  display: flex;
  align-items: center;
  border-bottom: 1px solid $gray200;
  padding: 10px 0;

  img {
    height: 50px;
    width: 50px;
    border-radius: 50px;
    object-fit: cover;
    object-position: center;
    border: 5px solid $gray100;
  }

  h1 {
    font-size: 15px;
    font-weight: 600;
    margin-left: 20px;
    color: $purple400;
  }
}
</style>
