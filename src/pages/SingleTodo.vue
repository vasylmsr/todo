<template>
  <div class="todo">
    <div v-if="!currentTodo.id" style="display: flex; justify-content: center">Loading...</div>
    <base-card v-else>
      <div class="todo__title-wrapper">
        <h1 class="todo__title">{{currentTodo.title}}</h1>
      </div>
      <hr class="separator" />

      <div class="todo__description">
        {{currentTodo.description}}
      </div>

      <hr class="separator" />
    </base-card>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import BaseCard from "../components/UI/BaseCard";

export default {
  name: "SingleTodo",
  components: {BaseCard},
  computed: {
    ...mapState(['currentTodo', 'fetchingTodoError']),
  },
  methods: {
    ...mapActions(['fetchTodo'])
  },
  created() {
    const todoIdParam = this.$route.params.id;
    const todoIdArrParam = todoIdParam.split('-');
    const todoId = todoIdArrParam[todoIdArrParam.length - 1];
    this.fetchTodo(todoId);
  },
  watch: {
    fetchingTodoError(newValue){
      if(newValue && newValue.status === 404) {
        this.$router.push('/not-found')
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .todo {
    word-break: break-word;

    &__title-wrapper {
      margin: 10px 0 15px;
    }

    &__title {
      font-size: 16px;
      font-weight: 600;
      text-align: center;
    }

    &__description {
      text-indent: 20px;
      line-height: 25px;
    }
  }

  .separator {
    padding: 5px 0;
  }
</style>
