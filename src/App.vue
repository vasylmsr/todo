<template>
  <div class="app">
    <div class="app__body">
      <app-layout>
        <router-view></router-view>
      </app-layout>
    </div>
  </div>
</template>

<script>
import AppLayout from "./components/AppLayout";


export default {
  name: 'App',
  components: {
    AppLayout,
  }
}
</script>

<style lang="scss">
  .app {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .app__body {
    max-width: 800px;
    width: 100%;
  }
</style>
