import Vue from 'vue';
import VueRouter from 'vue-router';
import Demo from '../views/components.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Demo',
    component: Demo,
  },
  {
    path: '/Home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue'),
  },
];

// xxxx替换为项目名称
const router = new VueRouter({
  mode: 'history',
  base: '/xxxx/',
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    return {
      x: 0,
      y: 0
    }
  },
  routes,
});
/**
 * 路由跳转
 * @param link String
 */
// eslint-disable-next-line func-names
VueRouter.prototype.openPage = function (link, query) {
  this.push({
    path: link,
    query: { // time: new Date().getTime()
      ...query || {},
    },
  });
};
// 路由前置守卫操作
router.beforeEach((to, from, next) => {
  next();
});
export default router;
