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
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
a {
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
