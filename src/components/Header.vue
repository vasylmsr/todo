<template>
  <header class="header">
    <div class="header__body">
      Todo app
    </div>
  </header>
</template>

<script>
  export default {
    name: "Header"
  }
</script>

<style scoped lang="scss">
  @import "~@/assets/styles/variables";

  .header {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 50px;
    background: map-get($colors, 'dark');

    &__body {
      text-transform: uppercase;
      font-weight: 600;
      font-size: 20px;
      color: white;
    }
  }
</style>
