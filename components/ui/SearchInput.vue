<template>
  <input
    type="text"
    placeholder="Pesquisar..."
    :value="value"
    @input="$emit('input')"
  />
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
input {
  font-size: 15px;
  outline: none;
  border: 1px solid $gray200;
  height: 35px;
  border-radius: 4px;
  padding: 0 10px 0 40px;
  width: calc(100% - 50px);
  margin-bottom: 10px;
  background: url('../../static/images/search.svg') no-repeat 10px;
}
</style>
