<template>
  <nav>
    <div class="comeback" @click="comeback">
      <img src="/images/comeback.svg" height="15px" />
    </div>
    <h1 v-text="title" />
  </nav>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  methods: {
    comeback() {},
  },
}
</script>

<style lang="scss" scoped>
nav {
  display: flex;
  align-items: center;
  height: 50px;
  border-bottom: 1px solid $gray200;
  padding: 0 20px;

  h1 {
    font-size: 14px;
    font-weight: 600;
    margin: 0 0 0 15px;
  }
}
</style>
