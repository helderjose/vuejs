// import User from './components/user/User.vue';
// import UserStart from './components/user/UserStart.vue';
// import UserDetail from './components/user/UserDetail.vue';
// import UserEdit from './components/user/UserEdit.vue';
import Home from './components/Home.vue';
// import Header from './components/Header.vue';
import Cobranca from './components/Cobranca.vue';
import Drawer from './components/Drawer.vue'
import ProductSelection from './components/ProductSelection.vue'
import IssueSelection from './components/IssueSelection.vue'
import BillingWarning from './components/BillingWarning.vue'


export const routes = [

	{
		path: '',
		// component: Home,
		redirect: '/diagnostic'
	},
	{
		path: '/diagnostic',
		component: Home,
		// redirect: '/diagnostic/drawer/product-selection'
	},
	{
		path: '/diagnostic/billing-warning',
		component: BillingWarning,
		// redirect: '/diagnostic/drawer/product-selection'
	},
	{
		path: '/diagnostic/product-selection',
		component: Drawer,
		// 'in-drawer': ProductSelection
		// redirect: '/diagnostic/drawer/product-selection'
		children: [
			{ path: '', components: { default: ProductSelection, 'in-drawer': ProductSelection },  },
			// { path: 'issue-selection', components: { default: ProductSelection, 'in-drawer': IssueSelection },  },
		]
	},
	{
		path: '/diagnostic/issue-selection',
		component: Drawer,
		// 'in-drawer': ProductSelection
		// redirect: '/diagnostic/drawer/product-selection'
		children: [
			// { path: '', components: { default: ProductSelection, 'in-drawer': ProductSelection },  },
			{ path: '', components: { default: ProductSelection, 'in-drawer': IssueSelection },  },
		]
	},

	// {
	// 	path: '/diagnostic/billing-warning', component: Cobranca
	// },

	// {
	// 	// header-top vai ser usado no App.vue
	// 	path: '', name: 'home', components: {
	// 		default: Home,
	// 		'header-top': Header
	// 	}
	// },
	// header-bottom vai ser usado no App.vue
	// { path: '/user', components: {
	// 	default: User,
	// 	'header-bottom': Header
	// }, children: [
	// 	{ path: '', component: UserStart },
	// 	{ path: ':id', component: UserDetail },
	// 	{ path: ':id/edit', component: UserEdit, name: 'userEdit' }
	// ]
	// },
	{
		path: '/billing-warning', component: Cobranca
	},





	// funciona
	{
		path: '/diagnostic/drawer',
		component: Drawer,
		children: [
			{ path: 'product-selection', components: { default: ProductSelection, 'in-drawer': ProductSelection },  },
			{ path: 'issue-selection', components: { default: ProductSelection, 'in-drawer': IssueSelection },  },
		]
	},

	// nao funciona
	// {
	// 	path: '/product-selection',
	// 	components: {
	// 		default: Drawer,
	// 		'in-drawer': ProductSelection
	// 	}
	// },

	// nao funciona
	// {
	// 	path: '/product-selection',
	// 	component: Drawer,
	// 	'in-drawer': ProductSelection
	// },

];