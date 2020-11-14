<template>
  <div class="card"><slot></slot></div>
</template>

<script>
  export default {
    name: "BaseCard"
  }
</script>

<style scoped lang="scss">
  .card {
    border: 1px solid #dcdfe6;
    padding: 15px;
    border-radius: 4px;
    box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
  }
</style>
