<template>
  <div>
    <table>
      <thead>Empleados</thead>
      <h2>total {{ ClerkStore.totalEmployees }}</h2>

      <tr v-for="item in ClerkStore.employees" :key="item.id">
        <td>{{ item.nombre }}</td>
      </tr>
    </table>

  </div>
</template>

<script setup lang="ts">
import { useClerkStore } from '../stores/employes';

const ClerkStore = useClerkStore();

ClerkStore.getEmployees(10, 2)
</script>

<style scoped></style>