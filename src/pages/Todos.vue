<template>
  <div>
    <div class="panel__buttons">
      <base-button id="button--green" type="primary" @click="toggleVisibilityOfNewTodoForm">
        Create New Todo
      </base-button>
      <base-button type="danger" @click="DELETE_ALL_TODOS">
        Delete All
      </base-button>
    </div>

    <transition name="show-hide">
      <add-todo
        v-if="isVisibleNewTodoForm"
        @save="ADD_NEW_TODO"
        class="add-item"
      />
    </transition>

    <base-input
      class="search-input"
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
import AddTodo from "../components/AddTodo";
import { mapGetters, mapActions, mapMutations } from 'vuex';
import BaseButton from "../components/UI/BaseButton";
import BaseInput from "../components/UI/BaseInput";
import SearchIcon from "../components/UI/icons/SearchIcon";
import TodosList from "../components/todosList/TodoList";
import {getSingleTodoUrl} from "../utils/helpers";


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
  name: "Main",
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
        todo.title.toLowerCase().indexOf(this.searchText.toLowerCase()) >= 0 && todo);
      return this.sortTodosByText(foundTodosByText);
    }
  },
  methods: {
    ...mapMutations(['ADD_NEW_TODO', 'UPDATE_TODO', 'DELETE_TODO', 'DELETE_ALL_TODOS']),
    ...mapActions(['fetchTodos']),
    toggleVisibilityOfNewTodoForm() {
      this.isVisibleNewTodosForm = !this.isVisibleNewTodosForm;
    },
    goToTodoPage(todo) {
      this.$router.push(`/todos/${getSingleTodoUrl(todo.id, todo.title)}`);
    },
    sortTodosByText
  },
  created() {
    this.fetchTodos();
  }
}
</script>

<style scoped lang="scss">
  .todos {
    margin-top: 50px;
  }

  .panel {
    margin-top: 30px;
    flex-wrap: wrap;
  }

  .add-item {
    margin: 20px 0;
  }

  .panel__buttons {
    display: flex;
    justify-content: space-around;
    margin: 20px;
  }

  @media only screen and (max-width: 768px) {
    .panel__buttons {
      margin-bottom: 20px;

      & > * {
        width: 100%;
        justify-content: space-between;
      }
    }
  }

  .show-hide-enter-active, .show-hide-leave-active {
    transition: 0.2s;
  }
  .show-hide-enter, .show-hide-leave-to {
    opacity: 0;
    transform: translateY(-10px);
  }
</style>
