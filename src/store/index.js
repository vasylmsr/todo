import Vue from "vue"
import Vuex from "vuex"
import {getTodos} from "../api/fakeApi";
import {getUniqueId} from "../utils/helpers";

Vue.use(Vuex);

const findIndexById = (arr, id) => arr.findIndex(el => el.id === id);

export const store = {
  state: {
    todos: []
  },

  getters: {
    todos(state) {
      return state.todos;
    }
  },

  mutations: {
    SET_TODOS(state, todos) {
      state.todos = todos;
    },

    ADD_NEW_TODO(state, todoText) {
      if(todoText && todoText.length) {
        state.todos.push({
          id: getUniqueId(),
          title: todoText
        });
      }
    },

    UPDATE_TODO(state, todo) {
      Vue.set(state.todos, findIndexById(state.todos, todo.id), todo);
    },

    DELETE_TODO(state, todo) {
      Vue.delete(state.todos, findIndexById(state.todos, todo.id))
    },

    DELETE_ALL_TODOS(state) {
      state.todos = [];
    }
  },

  actions: {
    async fetchTodos({ commit }){
      const todos = await getTodos();
      commit('SET_TODOS', todos);
    }
  }
};

export default new Vuex.Store(store);
