import Vue from 'vue'
import store from './store'
import App from './App.vue'
import './assets/styles/reset.css'
import router from './router';


Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app');
