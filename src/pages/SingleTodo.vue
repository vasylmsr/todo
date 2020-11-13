<template>
  <div>
    <div v-if="!currentTodo.id" style="display: flex; justify-content: center">Loading...</div>
    <div v-else>
       <div style="text-align: center">{{currentTodo.title}}</div>
       <div>{{currentTodo.description}}</div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: "SingleTodo",
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

<style scoped>

</style>
