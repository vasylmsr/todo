<template>
  <div class="panel">
    <div class="panel__buttons">
      <base-button type="primary" @click="toggleAddTodoForm">
        Create New Todo
      </base-button>
      <base-button type="danger" @click="deleteAllTodos">
        Delete All
      </base-button>
    </div>

    <transition name="show-hide">
      <add-todo
        v-if="isVisibleNewTodoForm"
        @save="saveTodo"
        class="panel__add-todo"
      />
    </transition>

    <base-input
      v-model="searchText"
      class="panel__search-input"
      placeholder="Search for..."
    >
      <search-icon
        slot="prefix"
        color="#c0c4cc"
        width="15px"
      />
    </base-input>

    <todos-list
      :todos="sortedTodos"
      @edit="updateTodo"
      @delete="deleteTodo"
      @view="handleTodoViewClick"
    />
  </div>
</template>

<script>
import AddTodo from "../components/forms/TodoForm";
import BaseButton from "../components/UI/BaseButton";
import BaseInput from "../components/UI/BaseInput";
import SearchIcon from "../components/UI/icons/SearchIcon";
import TodosList from "../components/todosList/TodoList";

function sortTodosByText(arr) {
  return Object.assign([], arr).sort((a,b) => {
    a = a.title.toLowerCase();
    b = b.title.toLowerCase();
    if(a > b) return 1;
    if(b > a) return -1;
    return 0;
  });
}

export default {
  name: "TodosPanel",
  components: {
    TodosList,
    SearchIcon,
    BaseInput,
    BaseButton,
    AddTodo,
  },
  props: {
    todos: {
      type: Array,
      default: () => [],
    }
  },
  data() {
    return {
      searchText: '',
      isVisibleNewTodoForm: false
    }
  },
  computed: {
    sortedTodos() {
      if (!this.searchText.length) return sortTodosByText(this.todos);
      let foundTodosByText = this.todos.filter(todo =>
        todo.title.toLowerCase().indexOf(this.searchText.toLowerCase()) >= 0);
      return sortTodosByText(foundTodosByText);
    }
  },
  methods: {
    toggleAddTodoForm() {
      this.isVisibleNewTodoForm = !this.isVisibleNewTodoForm;
    },
    deleteAllTodos() {
      this.$emit('deleteAllTodos')
    },
    updateTodo(todo){
      this.$emit('updateTodo', todo);
    },
    deleteTodo(todo) {
      this.$emit('deleteTodo', todo);
    },
    handleTodoViewClick(todo) {
      this.$emit('todoViewClick', todo);
    },
    saveTodo(todo) {
      this.toggleAddTodoForm();
      this.$emit('addTodo', todo);
    },
  },
}
</script>

<style scoped lang="scss">
  .panel {
    &__add-todo, &__search-input {
      margin: 20px 0;
    }

    &__buttons {
      display: flex;
      justify-content: space-around;
      margin: 20px;
    }
  }

  @media only screen and (max-width: 768px) {
    .panel {
      &__buttons {
        margin-bottom: 20px;

        & > * {
          width: 100%;
          justify-content: space-between;
        }
      }
    }
  }
</style>
