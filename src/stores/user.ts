import { defineStore } from "pinia";
import axios, { AxiosError } from "axios";
import router from "../router/router";
import { User } from "../interfaces/User";

export const useUserStore = defineStore("userStore", {
  state: () => ({
    userData: null as User | null,
    loadingUser: false,
    loadingSession: false,
  }),
  getters: {
  },
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
          oficina: user.oficina
        };
      } catch (error) {
        console.log(error);
      }
    },
    async loginUser(email: string, password: string) {
      try {
        this.loadingUser = true;

        let headersList = {
          "Content-Type": "application/json",
        };

        let bodyContent = JSON.stringify({
          correo: email,
          password: password,
        });

        let reqOptions = {
          url: "https://fepruebatecnicaculqi-backend-production.up.railway.app/auth/login",
          method: "POST",
          headers: headersList,
          data: bodyContent,
        };

        let response = await axios.request(reqOptions);

        const user = response.data

        await this.setUser(user);

        router.push("/");
      } catch (error: any) {
        return error.response.status;
      } finally {
        this.loadingUser = false;
      }
    },
    // async logOutUser() {
    //   const store = useDatabaseStore();
    //   store.$reset();
    //   try {
    //     this.loadingUser = true;
    //     router.push("/login");
    //     await signOut(auth);
    //     this.userData = null;
    //   } catch (error) {
    //     console.log(error);
    //   } finally {
    //     this.loadingUser = false;
    //   }
    // },
    currentUser() {
      
    },
  },
});
