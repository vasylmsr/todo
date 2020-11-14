<template>
  <div>
    <header class="header">
      <h1 class="header__title">Todo application</h1>
      <h2>Mysiura Vasyl</h2>
    </header>

    <main>
      <slot></slot>
    </main>
  </div>
</template>

<script>
  export default {
    name: "PageTitle"
  }
</script>

<style scoped lang="scss">
 .header {
   text-align: center;
   &__title {
     font-size: 20px;
     font-weight: 600;
   }
 }
</style>
