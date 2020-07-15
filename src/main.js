import Vue from 'vue';
import SiteData from '@/data/index';
import Modal from '@/plugins/modal';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;

Vue.use(Modal);
Vue.use(SiteData);

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
