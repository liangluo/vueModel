import Vue from 'vue';
import { Button, Cell } from 'mint-ui';
import App from './App.vue';
import router from './router';
import store from './store';
import http from './util/axiosRequest';

Vue.component(Button.name, Button);
Vue.component(Cell.name, Cell);

// 定义全局变量
Vue.prototype.$http = http;


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
