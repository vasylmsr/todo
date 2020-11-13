<template>
  <div class="not-found">
    <div class="not-found__status">404</div>
    <div>
      Sorry, page not found
    </div>
  </div>
</template>

<script>
export default {
  name: "NotFound"
}
</script>

<style scoped lang="scss">
@import "../assets/styles/variables";

.not-found {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: map-get($colors, 'danger');

  &__status {
    font-size: 60px;
  }
}
</style>