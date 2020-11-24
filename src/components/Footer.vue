<template>
  <footer class="footer">
    <div class="footer__body">
      Created by Vasyl Mysiura
    </div>
  </footer>
</template>

<script>
  export default {
    name: "Footer"
  }
</script>

<style scoped lang="scss">
  @import "~@/assets/styles/variables";

  .footer {
    display: flex;
    align-items: center;
    justify-content: center;
    background: map-get($colors, 'dark');
    min-height: 40px;

    &__body {
      font-size: 14px;
      font-weight: 600;
      color: white;
    }
  }
</style>
