<template>
  <div v-if="!users.length" class="no-users">Nenhum usuário encontrado! ;(</div>
  <div v-else class="list">
    <Card v-for="user in users" :key="user.login" :user="user" />
  </div>
</template>

<script>
import Card from './card'

export default {
  components: {
    Card,
  },
  props: {
    users: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.no-users {
  font-size: 14px;
  color: $gray400;
  width: 100%;
  text-align: center;
  margin-top: 20px;
}

.list {
  display: flex;
  flex-direction: column;

  @media ($desktop) {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    border-bottom: 1px solid $gray200;
    border-left: 1px solid $gray200;
  }
}
</style>
