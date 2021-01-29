<template>
  <section>
    <div>
      <img src="/images/following.svg" width="9px" alt="Seguindo" />
      <span>{{ user.following }}</span>
      <div>Seguindo</div>
    </div>

    <div>
      <img src="/images/projects.svg" width="20px" alt="Projetos" />
      <span>{{ user.public_repos }}</span>
      <div>Projetos</div>
    </div>

    <div>
      <img src="/images/followers.svg" width="20px" alt="Seguidores" />
      <span>{{ user.followers }}</span>
      <div>Seguidores</div>
    </div>
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
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  font-weight: 600;
  color: $purple400;
  width: calc(100% - 40px);
  padding: 0 20px;
  margin-top: 28px;

  > div {
    text-align: center;
  }
}
</style>
