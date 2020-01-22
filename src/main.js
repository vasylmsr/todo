import Vue from 'vue'
import store from './store'
import ElementUI from 'element-ui'
import en from "element-ui/lib/locale/lang/en"
import App from './App.vue'

import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/reset.css'

Vue.config.productionTip = false;
Vue.use(ElementUI, { locale: en });

new Vue({
  store,
  render: h => h(App)
}).$mount('#app');
