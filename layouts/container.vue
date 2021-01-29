<template>
  <div>
    <Navbar />
    <div class="container">
      <Nuxt />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  margin: 0 10px;

  @media ($desktop) {
    background-color: white;
    padding: 0 80px;
    min-height: 100vh;
    width: 700px;
    margin: 0 auto;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
  }
}
</style>
