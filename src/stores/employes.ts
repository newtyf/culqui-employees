import { defineStore } from "pinia";
import { Employee } from "../interfaces/Employee";
import { useRequest } from "../hooks/request";

export const useClerkStore = defineStore("clerkStore", {
  state: () => ({
    employees: [] as Employee[],
    totalEmployees: 0 as number,
    pageSize: 1 as number,
    loadingClerks: false,
    loading: false,
  }),
  getters: {},
  actions: {
    async getEmployees(limit: number, pagination: number) {
      try {
        this.loadingClerks = true;
        const response = await useRequest(
          `/empleados?limit=${limit}&page=${pagination}`,
          {},
          "GET"
        );
        const clerks: Employee[] = response.data;
        this.employees = clerks
        this.totalEmployees = response.total;
        this.pageSize = limit;
      } catch (error) {
        console.log(error);
      } finally {
        this.loadingClerks = false;
      }
    },
  },
});
