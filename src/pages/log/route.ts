import { RouteRecordRaw } from 'vue-router';
const component = () => import('./index.vue');
const route: RouteRecordRaw = {
  path: '/log',
  name: 'Log',
  meta: {
    title: '日志',
    keepAlive: true,
    requireAuth: false,
  },
  component,
};

export default route;
