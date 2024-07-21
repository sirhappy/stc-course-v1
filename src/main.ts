import { createApp } from 'vue';

import App from './App.vue';
import router from './router';
import { setupAppPlugins } from '@/plugins';

const app = createApp(App);

const setupApp = async () => {
  app.use(router);
  await router.isReady();

  setupAppPlugins(app);
  app.mount('#app');
};

setupApp();
