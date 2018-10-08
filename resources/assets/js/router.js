
import Home from './pages/Home.vue';
import Canal from './pages/Canal.vue';
import Sobre from './pages/Sobre.vue';
import Listar from './pages/Listar.vue';
import Exibir from './pages/Exibir.vue';

const routes =[
    {
      path: '/',
      name: 'Home',
      component: () => import(/* webpackChunkName: "home" */ './pages/Home.vue')
    },
    {
      path: '/admin',
      name: 'Admin',
      component: () => import(/* webpackChunkName: "admin" */ './pages/Admin.vue')
    },
    {
      path: '/:slug',
      name: 'Canal',
      component: () => import(/* webpackChunkName: "canal" */ './pages/Canal.vue'),
      children: [
        {
          path: 'inicio',
          name: 'Inicio',
          component: Home
        },
        {
          path: 'sobre',
          name: 'Sobre',
          component: Sobre
        },
        {
          path: 'listar',
          name: 'Listar',
          component: Listar
        },
        {
          path: 'exibir',
          name: 'Exibir',
          component: Exibir
        }

      ]
    }
];

export default routes;
