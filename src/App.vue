<template>
  <div>
    <page-title />

    <el-row type="flex" justify="space-between" class="panel">
      <el-col :xs="24" :sm="16">
        <el-row type="flex" class="panel__buttons">
            <el-button id="button--green" type="primary" @click="toggleVisibilityOfNewTaskForm">
              Create New Task
            </el-button>
            <el-button type="danger" @click="DELETE_ALL_TASKS">
              Delete All
            </el-button>
        </el-row>
      </el-col>


      <el-col :xs="24" :sm="8">
        <el-input
            class="search-input"
            v-model="searchText"
            placeholder="Search for...">
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
      </el-col>
    </el-row>

    <transition name="show-hide">
      <add-task
        v-if="isVisibleNewTaskForm"
        @save="ADD_NEW_TASK"
        class="add-item"
      />
    </transition>

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
</template>

<script>
import PageTitle from "./components/PageTitle";
import TaskItem from "./components/TaskItem";
import AddTask from "./components/AddTask";
import { mapGetters, mapActions, mapMutations } from 'vuex';

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
  .tasks {
    margin-top: 50px;
  }

  .panel {
    margin-top: 30px;
    flex-wrap: wrap;
  }

  .add-item {
    margin-top: 20px;
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
