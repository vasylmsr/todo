<template>
  <div class="todo">
    <full-todo-card v-if="currentTodo" :todo="currentTodo"/>
    <div v-else-if="currentTodoLoading" class="todo__loading">Loading...</div>
    <not-found v-else-if="notFound" />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import NotFound from "@/pages/NotFound";
import FullTodoCard from "@/components/FullTodoCard";
import {fetchTodo} from "../store/constant";

export default {
  name: "SingleTodo",
  components: {FullTodoCard, NotFound},
  computed: {
    ...mapState(['currentTodo', 'fetchingTodoError', 'currentTodoLoading']),
    notFound() {
      return this.fetchingTodoError && this.fetchingTodoError.status === 404
    }
  },
  methods: {
    ...mapActions([fetchTodo])
  },
  created() {
    const todoIdParam = this.$route.params.id;
    const todoIdArrParam = todoIdParam.split('-');
    const todoId = todoIdArrParam[todoIdArrParam.length - 1];
    this[fetchTodo](Number(todoId));
  },
}
</script>

<style scoped lang="scss">
  .todo {
    &__loading {
      display: flex;
      justify-content: center;
    }
  }
</style>
