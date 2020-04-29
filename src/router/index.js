import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = new VueRouter({
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
