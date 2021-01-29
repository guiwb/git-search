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
  padding: 0 10px;
  background-color: white;
  min-height: 100vh;

  @media ($desktop) {
    padding: 0;
    min-height: auto;
    width: 860px;
    margin: 0 auto;
    box-shadow: 5px 5px 20px -3px rgba(0, 0, 0, 0.1);
  }
}
</style>
