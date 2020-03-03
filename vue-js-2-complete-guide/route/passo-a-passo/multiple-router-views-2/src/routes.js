import User from './components/user/User.vue';
import UserStart from './components/user/UserStart.vue';
import UserDetail from './components/user/UserDetail.vue';
import UserEdit from './components/user/UserEdit.vue';
import Home from './components/Home.vue';
import Header from './components/Header.vue';
import Cobranca from './components/Cobranca.vue';
import Drawer from './components/Drawer.vue'
import ProductSelection from './components/ProductSelection.vue'


export const routes = [

	{
		// header-top vai ser usado no App.vue
		path: '', name: 'home', components: {
			default: Home,
			'header-top': Header
		}
	},
	// header-bottom vai ser usado no App.vue
	{ path: '/user', components: {
		default: User,
		'header-bottom': Header
	}, children: [
		{ path: '', component: UserStart },
		{ path: ':id', component: UserDetail },
		{ path: ':id/edit', component: UserEdit, name: 'userEdit' }
	]
	},
	{
		path: '/cobranca', component: Cobranca
	},
	// {
	// 	path: '/drawer', component: Drawer
	// },

	// funcionour
	{
		path: '/drawer',
		component: Drawer,
		children: [
			// { path: '/drawer/product-selection', component: ProductSelection, 'in-drawer': ProductSelection },
			{ path: 'product-selection', components: { default: ProductSelection, 'in-drawer': ProductSelection },  },
		]
	},
	// {
	// 	path: '/product-selection', component: Drawer, 'in-drawer': ProductSelection
	// },
];