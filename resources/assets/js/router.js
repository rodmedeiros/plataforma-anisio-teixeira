import VueRouter from "vue-router";
import routes from "./routes";
import store from "./store";

const router = new VueRouter({
  mode: "history",
  linkActiveClass: 'q-router-link--active',
  linkExactActiveClass: 'q-router-link--exact-active',
  routes
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} - Plataforma Anísio Texeira`;
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // You can use store variable here to access globalError or commit mutation
    if (store.state.isLogged) {
      next();
    } else {
      store.commit('SET_LOGOUT_USER');
      next("/usuario/login");
    }
  } else {
    next();
  }
});

export default router;