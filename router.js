import Vue from 'vue';
import Router from 'vue-router';

/* layout */
import Layout from 'views/index/layout';
import Indexpage from 'views/index/index';
/* post */ 
import postEdit from 'views/post/edit';
import postList from 'views/post/list';

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
		},
		{
			path: '/post',
			component: Layout,
			noDropdown: true,
			icon: 'home',
			children: [
				{ path: '/', component: postList, name: 'Index', hidden: true },
				{ path: 'edit', component: postEdit, name: 'Index', hidden: true },
				{ path: '/*', redirect: '/post'}
			]
		}
	]
});
