import { createApp } from 'vue'

import App from './App.run.vue';

;(async () => {
  const app = createApp(App);

  app.mount('#run');
})();
