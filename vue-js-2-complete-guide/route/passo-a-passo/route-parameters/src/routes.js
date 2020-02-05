import User from './components/user/User.vue';
import Home from './components/Home.vue';

export const routes = [
	{ path: '', component: Home },

	/*
	:id -> espera um parâmetro
	http://localhost:8080/user/10

	http://localhost:8080/user
	Assim não carrega a página, pelo menos nesse exemplo não.
	*/
	{ path: '/user/:id', component: User }
];