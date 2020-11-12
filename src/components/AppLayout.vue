<template>
  <div>
    <div class="title-text">
      <h1>Todo application</h1>
      <h2>Mysiura Vasyl</h2>
    </div>

    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "PageTitle"
  }
</script>

<style scoped>
 .title-text {
   text-align: center;
 }
</style>
