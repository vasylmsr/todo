<template>
  <todos-panel
    :todos="todos"
    @addTodo="addNewTodo"
    @deleteTodo="DELETE_TODO"
    @updateTodo="UPDATE_TODO"
    @deleteAllTodos="DELETE_ALL_TODOS"
    @todoViewClick="goToTodoPage"
  />
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex';
import {getSingleTodoUrl} from "../utils/helpers";
import {ADD_NEW_TODO, DELETE_ALL_TODOS, DELETE_TODO, fetchTodos, UPDATE_TODO} from "../store/constant";
import paths from "../router/paths";
import TodosPanel from "../components/TodosPanel";

export default {
  name: "TodosPage",
  components: {
    TodosPanel,
  },

  computed: {
    ...mapGetters(['todos']),
  },
  methods: {
    ...mapMutations([ADD_NEW_TODO, UPDATE_TODO, DELETE_TODO, DELETE_ALL_TODOS]),
    ...mapActions([fetchTodos]),
    goToTodoPage(todo) {
      this.$router.push(`${paths.todos}/${getSingleTodoUrl(todo.id, todo.title)}`);
    },
    addNewTodo(todo) {
      this[ADD_NEW_TODO](todo);
      alert('Todo is saved');
    }
  },
  created() {
    this[fetchTodos]();
  }
}
</script>
