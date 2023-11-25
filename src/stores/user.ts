import { defineStore } from "pinia";
import router from "../router/router";
import { User } from "../interfaces/User";
import { deleteCookie, getCookiee, setCookie } from "../helpers/Cookies";
import { useRequest } from "../hooks/request";
import { isTokenExpired } from "../helpers/Token";
import { useClerkStore } from "./employes";

export const useUserStore = defineStore("userStore", {
  state: () => ({
    userData: null as User | null,
    loadingUser: false,
    loadingSession: false,
  }),
  getters: {},
  actions: {
    async setUser(user: User) {
      try {
        this.userData = {
          id: user.id,
          correo: user.correo,
          cargo: user.cargo,
          departamento: user.departamento,
          estadoCuenta: user.estadoCuenta,
          nombre: user.nombre,
          oficina: user.oficina,
        };

        localStorage.setItem("user", JSON.stringify(this.userData));
      } catch (error) {
        console.log(error);
      }
    },
    async loginUser(email: string, password: string) {
      try {
        this.loadingUser = true;

        let body = {
          correo: email,
          password: password,
        };

        let response = await useRequest("/auth/login", body, "POST");
        const user = response.data.user;

        const token = response.data.token;
        setCookie("jwtToken", token, 1);

        await this.setUser(user);

        router.push("/");
      } catch (error: any) {
        return error.response.status;
      } finally {
        this.loadingUser = false;
      }
    },
    async logOutUser() {
      const store = useClerkStore();
      store.$reset();
      this.loadingUser = true;
      router.push("/login");
      localStorage.removeItem("user");
      deleteCookie("jwtToken");
      this.userData = null;
      this.loadingUser = false;
    },
    currentUser() {
      const item = localStorage.getItem("user");
      const token = getCookiee("jwtToken");

      if (item) {
        if (token === "") {
          this.logOutUser();
          return null;
        }

        if (isTokenExpired(token)) {
          this.logOutUser();
          return null;
        }

        let user: User = JSON.parse(item);
        this.setUser(user);
      } else {
        this.userData = null;
      }

      return this.userData;
    },
  },
});
