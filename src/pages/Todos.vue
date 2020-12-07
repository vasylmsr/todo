<template>
  <div class="panel">
    <div class="panel__buttons">
      <base-button
        type="primary"
        @click="toggleAddTodoForm"
      >
        Create New Todo
      </base-button>
      <base-button type="danger" @click="DELETE_ALL_TODOS">
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
      class="panel__search-input"
      v-model="searchText"
      placeholder="Search for..."
    >
      <search-icon slot="prefix" color="#c0c4cc" width="15px" />
    </base-input>

    <todos-list
      :todos="sortedTodos"
      @edit="UPDATE_TODO"
      @delete="DELETE_TODO"
      @view="goToTodoPage"
    />
  </div>
</template>

<script>
import AddTodo from "../components/forms/TodoForm";
import { mapGetters, mapActions, mapMutations } from 'vuex';
import BaseButton from "../components/UI/BaseButton";
import BaseInput from "../components/UI/BaseInput";
import SearchIcon from "../components/UI/icons/SearchIcon";
import TodosList from "../components/todosList/TodoList";
import {getSingleTodoUrl} from "../utils/helpers";
import {ADD_NEW_TODO, DELETE_ALL_TODOS, DELETE_TODO, fetchTodos, UPDATE_TODO} from "../store/constant";

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
  name: "TodosPage",
  components: {
    TodosList,
    SearchIcon,
    BaseInput,
    BaseButton,
    AddTodo,
  },
  data() {
    return {
      searchText: '',
      isVisibleNewTodoForm: false
    }
  },
  computed: {
    ...mapGetters(['todos']),
    sortedTodos() {
      if (!this.searchText.length) return this.sortTodosByText(this.todos);
      let foundTodosByText = this.todos.filter(todo =>
        todo.title.toLowerCase().indexOf(this.searchText.toLowerCase()) >= 0);
      return this.sortTodosByText(foundTodosByText);
    }
  },
  methods: {
    ...mapMutations([ADD_NEW_TODO, UPDATE_TODO, DELETE_TODO, DELETE_ALL_TODOS]),
    ...mapActions([fetchTodos]),
    toggleAddTodoForm() {
      this.isVisibleNewTodoForm = !this.isVisibleNewTodoForm;
    },
    goToTodoPage(todo) {
      this.$router.push(`/todos/${getSingleTodoUrl(todo.id, todo.title)}`);
    },
    saveTodo(todo) {
      this[ADD_NEW_TODO](todo);
      alert('Todo is saved');
      this.toggleAddTodoForm();
    },
    sortTodosByText
  },
  created() {
    this[fetchTodos]();
  }
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
