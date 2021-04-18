import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
// import VueLazyLoad from 'vue-lazyload';
// import Vuetify from 'vuetify';
// Vue.use(Vuetify);

Vue.config.productionTip = false;
// Vue.use(VueLazyLoad, {
//   loading: require('./assets/img/loading.gif')
//   // error: require('./assets/lale_journal/default_head.png')
// });

new Vue({
  // vuetify: new Vuetify(),
  router,
  store,
  render: (h) => h(App)
}).$mount('#app');
