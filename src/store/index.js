import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex);

const findIndexById = (arr, id) => arr.findIndex(el => el.id === id);

export const store = {
  state: {
    tasks: []
  },

  getters: {
    tasks(state) {
      return state.tasks;
    }
  },

  mutations: {
    SET_TASKS(state, tasks) {
      state.tasks = tasks;
    },

    ADD_NEW_TASK(state, taskText) {
      if(taskText && taskText.length) {
        state.tasks.push({
          id: state.tasks.length && state.tasks[state.tasks.length - 1].id + 1 || 1,
          text: taskText
        });
      }
    },

    UPDATE_TASK(state, task) {
      Vue.set(state.tasks, findIndexById(state.tasks, task.id), task);
    },

    DELETE_TASK: (state, task) => {
      Vue.delete(state.tasks, findIndexById(state.tasks, task.id))
    },

    DELETE_ALL_TASKS(state) {
      state.tasks = [];
    }
  },

  actions: {
    fetchTasks({ commit }){
      // Imitation of asynchronous operation
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve([
            {
              id: 1, text: "First task"
            },
            {
              id: 2, text: "Second task"
            }
          ])
        }, 1500)
      })
      .then(data => {
        commit('SET_TASKS', data);
      })
    }

  }
};

export default new Vuex.Store(store);