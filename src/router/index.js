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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
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
