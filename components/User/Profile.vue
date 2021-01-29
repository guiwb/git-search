<template>
  <section>
    <div class="cover" />
    <div class="details">
      <img class="profile-picture" :src="user.avatar_url" :alt="user.login" />

      <div class="name">
        <h1 v-text="user.name" />

        <h4>
          <img src="/images/user.svg" height="10px" :alt="user.login" />
          {{ user.login }}
        </h4>
      </div>

      <Stats :user="user" />
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
  width: 100%;

  .cover {
    width: 100%;
    height: 145px;
    background: url('../../static/images/cover.png') no-repeat center;
    background-size: cover;
    border-radius: 8px;

    @media ($desktop) {
      height: 200px;
      border-radius: 0;
    }
  }

  .details {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: -80px;

    @media ($desktop) {
      flex-direction: row;
      width: calc(100% - 20px);
      margin-top: -130px;
      padding: 0 10px;
    }

    .profile-picture {
      width: 120px;
      height: 120px;
      border-radius: 120px;
      object-fit: cover;
      object-position: center;
      border: 5px solid $blue200;

      @media ($desktop) {
        width: 170px;
        height: 170px;
        border-radius: 170px;
      }
    }

    .name {
      display: flex;
      flex-direction: column;
      align-items: center;

      @media ($desktop) {
        align-items: flex-end;
        margin: 0 20px;
      }

      h1 {
        font-size: 24px;
        font-weight: 600;
        color: $purple400;
        margin: 10px 0;
      }

      h4 {
        font-size: 16px;
        font-weight: 400;
        color: $gray400;
        margin: 0;
        max-width: 80%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        text-align: center;

        @media ($desktop) {
          max-width: 100%;
        }
      }
    }
  }
}
</style>
