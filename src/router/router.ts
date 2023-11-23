import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";
import Dashboard from "../views/Dashboard.vue";

// const requireAuth = async (to, from, next) => {
//   const userStore = useUserStore();
//   userStore.loadingSession = true;
//   const user = await userStore.currentUser();
//   if (user) {
//     next();
//   } else {
//     next("/login");
//   }
//   userStore.loadingSession = false;
// };

const routes = [
  {
    path: "/",
    component: Dashboard,
    // beforeEnter: requireAuth,
    name: "dashboard",
  },
  { path: "/login", component: Login, name: "login" },
  // {
  //   path: "/:pathMatch(.*)*",
  //   component: "<div>404</div>",
  //   name: "404",
  //   // beforeEnter: redirectURL,
  // },
  // /:pathMatch(.*)* ----> esta expresion es para todas las paginas que no coincidan con los paths establecidos anteriormente
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
