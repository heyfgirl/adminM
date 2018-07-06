import Vue from 'vue';
//iview 视图库
import iView from 'iview';
import 'iview/dist/styles/iview.css';
Vue.use(iView);
//自定义图标 npm run icon 编译
import svgicon from 'vue-svgicon';
import 'components/svgicon/';
Vue.use(svgicon, { tagName: 'svgicon' });
//波纹按钮
import vueWaves from 'common/directive/waves';
Vue.use(vueWaves);
//滑动流畅
import sticky from 'components/sticky';
Vue.component('Sticky', sticky);
import vueSticky from 'common/directive/sticky';
Vue.use(vueSticky);

import store from 'common/store';
//应用入口
import App from './app.vue';
import router from './router';

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app');


