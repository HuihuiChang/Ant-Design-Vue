import Vue from 'vue';
import { Table, Button, Popconfirm, Modal, Input, Comment, Avatar, Icon, Tooltip, List, Form } from 'ant-design-vue';
import App from './App.vue';
import axios from 'axios';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import routes from './router/router.js';
const router = new VueRouter({
  routes
});
import './mock';
import './assets/css/app.css';

Vue.use(List)
Vue.use(Form)
Vue.component(Icon.name, Icon)
Vue.component(Modal.name, Modal)
Vue.component(Input.name, Input)
Vue.component(Table.name, Table)
Vue.component(Avatar.name, Avatar)
Vue.component(Button.name, Button)
Vue.component(Comment.name, Comment)
Vue.component(Tooltip.name, Tooltip)
Vue.component(Popconfirm.name, Popconfirm)

Vue.prototype.$axios = axios
Vue.config.productionTip = false

router.afterEach(() => {
  window.scrollTo(0,0);
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
