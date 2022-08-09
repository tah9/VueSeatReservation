import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.config.productionTip = false

Vue.use(Vant);
Vue.use(ElementUI);



new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
