<template>
  <div class="app">
    <div class="app__body">
      <page-title />

      <div class="panel__buttons">
        <base-button id="button--green" type="primary" @click="toggleVisibilityOfNewTaskForm">
          Create New Task
        </base-button>
        <base-button type="danger" @click="DELETE_ALL_TASKS">
          Delete All
        </base-button>
      </div>

      <transition name="show-hide">
        <add-task
          v-if="isVisibleNewTaskForm"
          @save="ADD_NEW_TASK"
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

      <transition-group name="show-hide" tag="div" class="tasks">
        <task-item
          v-for="(task, index) in sortedTasks"
          :key="task.id"
          :task="task"
          :index="index"
          @edit="UPDATE_TASK"
          @delete="DELETE_TASK"
        />
      </transition-group>
    </div>
  </div>
</template>

<script>
import PageTitle from "./components/PageTitle";
import TaskItem from "./components/TaskItem";
import AddTask from "./components/AddTask";
import { mapGetters, mapActions, mapMutations } from 'vuex';
import BaseButton from "./components/UI/BaseButton";
import BaseInput from "./components/UI/BaseInput";
import SearchIcon from "./components/UI/icons/SearchIcon";

function sortTasksByText(arr) {
  return Object.assign([], arr).sort((a,b) => {
    a = a.text.toLowerCase();
    b = b.text.toLowerCase();
    if(a > b) return 1;
    if(b > a) return -1;
    return 0;
  });
}

export default {
  name: 'App',
  components: {
    SearchIcon,
    BaseInput,
    BaseButton,
    TaskItem,
    AddTask,
    PageTitle
  },
  data() {
    return {
      searchText: '',
      isVisibleNewTaskForm: false
    }
  },
  computed: {
    ...mapGetters(['tasks']),
    sortedTasks() {
      if (!this.searchText.length) return this.sortTasksByText(this.tasks);
      let foundTasksByText = this.tasks.filter(task =>
        task.text.toLowerCase().indexOf(this.searchText.toLowerCase()) >= 0 && task);
      return this.sortTasksByText(foundTasksByText);
    }
  },
  methods: {
    ...mapMutations(['ADD_NEW_TASK', 'UPDATE_TASK', 'DELETE_TASK', 'DELETE_ALL_TASKS']),
    ...mapActions(['fetchTasks']),
    toggleVisibilityOfNewTaskForm() {
      this.isVisibleNewTaskForm = !this.isVisibleNewTaskForm;
    },
    sortTasksByText
  },
  async created() {
    await this.fetchTasks();
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
    max-width: 700px;
    width: 100%;
  }

  .tasks {
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
