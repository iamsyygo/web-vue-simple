import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import store from './store';
import router from './router';
import { handleDevRoutes } from '@/utils/autoCollects';

createApp(App).use(router).use(store).mount('#app');
handleDevRoutes(router);
