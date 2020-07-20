import Vue from 'vue';
import VueRouter from 'vue-router';
// import Home from '@/views/Home.vue';
import Resume from '@/views/Resume.vue';

import middleware from '@/router/middleware';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/resume',
    // component: Home,
    // meta: {
    //   title: 'bbrist',
  // },
  },
  {
    path: '/resume',
    name: 'Resume',
    component: Resume,
    meta: {
      title: 'bbrist | Resume',
    },
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
  routes,
});

middleware(router);

export default router;
