<template>
  <article>
    <h1 v-text="repo.name" />
    <p v-text="description" />
    <div class="data">
      <div class="language">
        <div :style="{ 'background-color': color }" />
        {{ language }}
      </div>

      <span>Atualizado em {{ repo.updated_at | formatDate }}</span>
    </div>
  </article>
</template>

<script>
import getLanguageColor from '../../../../helpers/languageColors'

export default {
  filters: {
    formatDate(date) {
      const dateObj = new Date(date)

      const addLeftZero = (number) => (number < 10 ? `0${number}` : number)

      const day = addLeftZero(dateObj.getDate())
      const month = addLeftZero(dateObj.getMonth() + 1)
      const year = dateObj.getFullYear()

      return `${day}/${month}/${year}`
    },
  },
  props: {
    repo: {
      type: Object,
      required: true,
    },
  },
  computed: {
    color() {
      return getLanguageColor(this.repo.language) || '#ddd'
    },
    description() {
      return this.repo.description || 'Esse projeto não possui descrição 😕'
    },
    language() {
      return this.repo.language || 'Não definido'
    },
  },
}
</script>

<style lang="scss" scoped>
article {
  width: 100%;
  border-bottom: 1px solid $gray200;
  padding-bottom: 20px;

  h1 {
    font-size: 16px;
    color: $blue400;
    margin-bottom: 5px;
  }

  p {
    font-size: 13px;
    margin-top: 0;
  }

  .data {
    display: flex;
    justify-content: space-between;
    font-size: 12px;

    .language {
      display: flex;
      align-items: center;

      div {
        width: 10px;
        height: 10px;
        border-radius: 10px;
        margin-right: 5px;
      }
    }

    span {
      white-space: nowrap;
    }
  }
}
</style>
