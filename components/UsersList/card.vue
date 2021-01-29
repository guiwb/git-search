<template>
  <n-link :to="`/users/${user.login}`">
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

  @media ($desktop) {
    flex-direction: column;
    border-right: 1px solid $gray200;
    border-top: 1px solid $gray200;
    border-bottom: 0;
    grid-template-columns: repeat(5, 1fr);
    padding: 30px 0;
  }

  img {
    height: 50px;
    width: 50px;
    border-radius: 50px;
    object-fit: cover;
    object-position: center;
    border: 5px solid $gray100;

    @media ($desktop) {
      height: 100px;
      width: 100px;
      border-radius: 100px;
    }
  }

  h1 {
    font-size: 15px;
    font-weight: 600;
    margin-left: 20px;
    color: $purple400;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    @media ($desktop) {
      margin-left: 0;
      margin-bottom: 0;
      font-size: 20px;
      text-align: center;
      width: 134px;
    }
  }
}
</style>
