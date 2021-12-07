import Vue from 'vue';
import components from '@/components';
import App from './App.vue';
import router from './router';
import store from './store';
import http from './util/axiosRequest';
import filter from './util/filter';
import {
  Image as VanImage,
  Tabbar,
  TabbarItem,
  Tab,
  Tabs,
  Grid,
  GridItem,
  Swipe,
  SwipeItem,
  Lazyload,
  Toast,
  List,
  Empty,
  Cascader,
  ActionSheet,
  Stepper,
  Field,
  RadioGroup,
  Radio,
  Picker,
  Popup,
  Overlay,
  Dialog,
} from 'vant';
// 注入所有组件
Vue.use(VanImage);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Lazyload);
Vue.use(Toast);
Vue.use(List);
Vue.use(Empty);
Vue.use(Cascader);
Vue.use(ActionSheet);
Vue.use(Stepper);
Vue.use(Field);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(Picker);
Vue.use(Popup);
Vue.use(Overlay);
Vue.use(Dialog);

// 定义全局变量
Vue.prototype.$http = http;
Object.keys(filter).forEach((key) => Vue.filter(key, filter[key]));


Vue.config.productionTip = false;
components.install(Vue);


new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
