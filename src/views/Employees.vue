<template>
  <Dashboard>
    <div>
      <table>
        <thead>Empleados</thead>
        <h2>total {{ ClerkStore.totalEmployees }}</h2>

        <tr v-for="item in ClerkStore.employees" :key="item.id">
          <td>{{ item.nombre }}</td>
        </tr>
      </table>

    </div>
  </Dashboard>
</template>

<script setup lang="ts">
import Dashboard from "../layouts/Dashboard.vue"
import { useClerkStore } from '../stores/employes';

const ClerkStore = useClerkStore();

ClerkStore.getEmployees(10, 2)
</script>

<style scoped></style>