import User from './components/user/User.vue';
import Home from './components/Home.vue';

export const routes = [
	{ path: '', component: Home },

	// configura a rota com parâmetro
	{ path: '/user/:id', component: User }
];