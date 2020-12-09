import Vue from 'vue';
import Router from 'vue-router';
import routes from './routes';

Vue.use(Router);

const { NODE_ENV } = process.env;

export default new Router({
  mode: NODE_ENV === 'production' ? 'hash' : 'history', // for github pages
  routes,
});
