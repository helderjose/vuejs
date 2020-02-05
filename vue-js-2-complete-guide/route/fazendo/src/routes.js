import Home from './components/Home.vue';
import Header from './components/Header.vue';

// As constantes abaixo são to lazy load
// será gerado um bundle.js para cada const
// obs: 1 "const User" tem que ter o mesmo nome do "default: User,"
const User = resolve => {
	// sintaxe que o  webpack reconhece
	require.ensure(['./components/user/User.vue'], () => {
		resolve(require('./components/user/User.vue'));
	});
};
const UserStart = resolve => {
	require.ensure(['./components/user/UserStart.vue'], () => {
		resolve(require('./components/user/UserStart.vue'));
	});
};
const UserEdit = resolve => {
	require.ensure(['./components/user/UserEdit.vue'], () => {
		resolve(require('./components/user/UserEdit.vue'));
	});
};
const UserDetail = resolve => {
	require.ensure(['./components/user/UserDetail.vue'], () => {
		resolve(require('./components/user/UserDetail.vue'));
	});
};


/*
teste 2, passando 'user', 'user' é o group name,
como está passando o group name para todas as rotas o bundle desse group será usado também.
*/
// const User = resolve => {
// 	require.ensure(['./components/user/User.vue'], () => {
// 		resolve(require('./components/user/User.vue'));
// 	}, 'user');
// };
// const UserStart = resolve => {
// 	require.ensure(['./components/user/UserStart.vue'], () => {
// 		resolve(require('./components/user/UserStart.vue'));
// 	}, 'user');
// };
// const UserEdit = resolve => {
// 	require.ensure(['./components/user/UserEdit.vue'], () => {
// 		resolve(require('./components/user/UserEdit.vue'));
// 	}, 'user');
// };
// const UserDetail = resolve => {
// 	require.ensure(['./components/user/UserDetail.vue'], () => {
// 		resolve(require('./components/user/UserDetail.vue'));
// 	}, 'user');
// };

export const routes = [

	{
		path: '', name: 'home', components: {
			default: Home,
			'header-top': Header
		}
	},
	{ path: '/user', components: {
		default: User, // obs: 1 const User (mesmo nome, "User")
		'header-bottom': Header
	}, children: [
		{ path: '', component: UserStart },

		{
			path: ':id', component: UserDetail, beforeEnter: (to, from, next) => {
				console.log('routes.js -> inside route setup');
				next();
			}
		},
		{ path: ':id/edit', component: UserEdit, name: 'userEdit' }
	] },
	{ path: '/redirect-me', redirect: { name: 'home' } },
	{ path: '*', redirect: '/' }
];