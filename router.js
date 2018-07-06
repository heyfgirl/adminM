import Vue from 'vue';
import Router from 'vue-router';

/* layout*/
import Layout from 'views/index/layout';
import Indexpage from 'views/index/index';

Vue.use(Router);

export default new Router({
	// mode: 'history', //后端支持可开
	// scrollBehavior: () => ({ y: 0 }),
	routes: [
		{
			path: '/',
			component: Layout,
			noDropdown: true,
			icon: 'home',
			children: [
				{ path: '/index', component: Indexpage, name: 'Index', hidden: true },
			]
		}
	]
});
