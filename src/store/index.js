import Vue from "vue"
import Vuex from "vuex"
import {getTodo, getTodos} from "../api/fakeApi";
import {getUniqueId} from "../utils/helpers";

Vue.use(Vuex);

const findIndexById = (arr, id) => arr.findIndex(el => el.id === id);

export const store = {
  state: {
    todos: [],

    currentTodo: {},
    fetchingTodoError: null,
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

    ADD_NEW_TODO(state, todo) {
      state.todos.push({
        id: getUniqueId(),
        ...todo,
      });
    },

    UPDATE_TODO(state, todo) {
      Vue.set(state.todos, findIndexById(state.todos, todo.id), todo);
    },

    DELETE_TODO(state, todo) {
      Vue.delete(state.todos, findIndexById(state.todos, todo.id))
    },

    DELETE_ALL_TODOS(state) {
      state.todos = [];
    },

    SET_CURRENT_TODO(state, todo) {
      state.currentTodo = todo;
    },

    SET_FETCHING_TODO_ERROR(state, error) {
      state.fetchingTodoError = error;
    }
  },

  actions: {
    async fetchTodos({ commit }){
      const todos = await getTodos();
      commit('SET_TODOS', todos);
    },

    async fetchTodo({ commit, state }, todoId) {
      let foundTodo = state.todos.find(todo => todo.id === todoId);
      if(foundTodo) { commit('SET_CURRENT_TODO', foundTodo) }
      else {
        try {
          const response = await getTodo(todoId);
          commit('SET_CURRENT_TODO', response);
        } catch(error) {
          commit('SET_FETCHING_TODO_ERROR', error);
        }
      }
    },
  }
};

export default new Vuex.Store(store);
