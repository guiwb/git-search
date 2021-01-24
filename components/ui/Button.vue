<template>
  <n-link :to="to" :class="[color]">
    <slot />
  </n-link>
</template>

<script>
const ACCEPTED_COLORS = ['primary', 'secondary']

export default {
  props: {
    color: {
      type: String,
      default: 'primary',
      validator: (value) => ACCEPTED_COLORS.includes(value),
    },
    to: {
      type: [Object, String],
      default: null,
    },
  },
}
</script>

<style lang="scss" scoped>
a {
  outline: none;
  color: white;
  border: none;
  border-radius: 4px;
  margin: 5px;
  height: 50px;
  transition: all 0.25s ease;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  line-height: 50px;
  text-decoration: none;
  cursor: pointer;

  &.primary {
    background-color: $purple300;

    &:hover {
      background-color: darken($purple300, 10);
    }
  }
  &.secondary {
    background-color: $green200;

    &:hover {
      background-color: darken($green200, 10);
    }
  }
}
</style>
