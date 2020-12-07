<template>
  <transition-group name="show-hide" tag="div" class="todos">
    <todo-item
      v-for="(todo, index) in todos"
      :key="todo.id"
      :todo="todo"
      :index="index"
      @edit="$emit('edit', $event)"
      @delete="$emit('delete', $event)"
      @view="$emit('view', $event)"
    />
  </transition-group>
</template>

<script>
import TodoItem from "./TodoItem";
export default {
  name: "TodosList",
  components: {TodoItem},
  props: {
    todos: {
      type: Array,
      validate(value) {
        return value.every(todo => typeof todo === 'object')
      }
    }
  }
}
</script>

<style scoped lang="scss">
 .todos {
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
   grid-gap: 10px;
 }

 .show-hide-enter-active, .show-hide-leave-active {
   transition: 0.2s;
 }
 .show-hide-enter, .show-hide-leave-to {
   opacity: 0;
   transform: translateY(-10px);
 }
</style>
