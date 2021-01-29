<template>
  <input
    type="text"
    placeholder="Pesquisar..."
    :value="textSearch"
    @input="input"
  />
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  props: {
    withDebounce: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      timeout: null,
    }
  },
  computed: {
    ...mapState('users', ['textSearch']),
  },
  methods: {
    ...mapMutations('users', ['setTextSearch']),

    input(e) {
      this.setTextSearch(e.target.value)
      if (this.withDebounce) this.createDebounce()
    },

    createDebounce() {
      if (this.timeout) clearTimeout(this.timeout)

      if (this.textSearch && this.textSearch.length < 4) return
      this.timeout = setTimeout(() => this.$emit('search'), 1000)
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
  width: calc(100% - 52px);
  margin-bottom: 10px;
  background: url('../../static/images/search.svg') no-repeat 10px;
}
</style>
