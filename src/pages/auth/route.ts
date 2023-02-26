import { RouteRecordRaw } from 'vue-router';
const component = () => import('./index.vue');
const route: RouteRecordRaw = {
  path: '/auth',
  name: 'Auth',
  meta: {
    title: '登录',
    keepAlive: true,
    requireAuth: false,
  },
  component,
};

export default route;
