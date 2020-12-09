<template>
  <div class="app-layout">
    <Header class="app-layout__header" @headerClick="handleHeaderClick" />

    <main class="app-layout__main">
      <slot></slot>
    </main>

    <Footer class="app-layout__footer"/>
  </div>
</template>

<script>
import Header from "./Header";
import Footer from "./Footer";
import paths from "../../../router/paths";

export default {
  name: "PageTitle",
  components: {Footer, Header},
  methods: {
    handleHeaderClick() {
      if(this.$route.path !== paths.home) {
        this.$router.push(paths.home);
      }
    }
  }
}
</script>

<style scoped lang="scss">
 .app-layout {
   display: flex;
   flex-direction: column;
   align-items: center;
   min-height: 100vh;
   width: 100%;

   &__main {
     flex: 1 1 auto;
     width: 100%;
     max-width: 800px;
     margin: 30px 0;
   }

   &__footer, &__header {
     width: 100%;
   }

   &__footer {
     margin-top: auto;
   }
 }
</style>
