import { defineStore } from "pinia";
import router from "../router/router";
import { Employee } from "../interfaces/Employee";
import { useRequest } from "../hooks/request";

export const useClerkStore = defineStore("clerkStore", {
  state: () => ({
    employees: [] as Employee[],
    totalEmployees: 0 as number,
    loadingClerks: false,
    loading: false,
  }),
  getters: {},
  actions: {
    async getEmployees(limit: number, pagination: number) {
      try {
        if (this.employees.length !== 0) {
          return;
        }

        this.loadingClerks = true;
        const response = await useRequest(
          `/empleados?limit=${limit}&page=${pagination}`,
          {},
          "GET"
        );
        const clerks: Employee[] = response.data;
        clerks.forEach((clerk) => {
          this.employees.push(clerk);
        });

        this.totalEmployees = response.total;
      } catch (error) {
        console.log(error);
      } finally {
        this.loadingClerks = false;
      }
    },
  },
});
