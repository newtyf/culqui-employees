import {
  NavigationGuardNext,
  RouteLocationNormalized,
  RouteRecordRaw,
  createRouter,
  createWebHistory,
} from "vue-router";
import Login from "../views/Login.vue";
import { useUserStore } from "../stores/user";
import Employees from "../views/Employees.vue";
import NotFound from "../views/NotFound.vue";
import Dashboard from "../views/Dashboard.vue";
import Recruitment from "../views/Recruitment.vue";

const requireAuth = async (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) => {
  const userStore = useUserStore();
  userStore.loadingSession = true;

  const user = userStore.currentUser();
  if (user) {
    next();
  } else {
    next("/login");
  }
  userStore.loadingSession = false;
};

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: Dashboard,
    beforeEnter: requireAuth,
    name: "dashboard",
    children: [
      {
        path: "/empleados",
        component: Employees,
        name: "empleados"
      },
      {
        path: "/reclutamiento",
        component: Recruitment,
        name: "reclutamiento"
      },
    ],
  },
  { path: "/login", component: Login, name: "login" },
  {
    path: "/:pathMatch(.*)*",
    component: NotFound,
    name: "404",
    // beforeEnter: redirectURL,
  },
  // /:pathMatch(.*)* ----> esta expresion es para todas las paginas que no coincidan con los paths establecidos anteriormente
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
