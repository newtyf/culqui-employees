<template>
  <section class="w-full bg-white rounded-xl p-6">
    <header class="flex justify-between">
      <div>
        <h1 class="text-2xl font-semibold">Empleados</h1>
        <p class="text-sm text-gray-500">Gestiona tus empleados</p>
      </div>
      <div>
        <CustomBtn class="mx-1">Descargar</CustomBtn>
        <CustomBtn class="mx-1">Nuevo</CustomBtn>
      </div>
    </header>
    <nav v-if="!ClerkStore.loadingClerks" class="my-6 flex justify-between">
      <input type="text" class="h-10 border-2 rounded-lg w-8/12 p-4" placeholder="Buscar empleado">
      <select name="cargo" id="" class="ml-4 w-4/12 px-2 border-2 rounded-lg h-10">
        <option value="">Nombre de cargo</option>
        <option value="">Departamento</option>
        <option value="">Oficio</option>
      </select>
    </nav>
    <article v-if="!ClerkStore.loadingClerks">
      <table class="w-full">
        <thead align="left" class="bg-gray-100 h-16">
          <th class="text-gray-400 pl-5 text-sm">Nombre</th>
          <th class="text-gray-400 pl-5 text-sm">Nombre cargo</th>
          <th class="text-gray-400 pl-5 text-sm">Departamento</th>
          <th class="text-gray-400 pl-5 text-sm">Oficina</th>
          <th class="text-gray-400 pl-5 text-sm">Cuenta</th>
          <th class="text-gray-400 pl-5 text-sm">Acciones</th>
        </thead>
        <tbody>
          <tr class="border-b-2 h-14" v-for="item in ClerkStore.employees">
            <td class="pl-5 text-sm">{{ item.nombre }} <p class="text-gray-400 text-sm">{{ item.correo }}</p>
            </td>
            <td class="pl-5 text-sm">{{ item.cargo }}</td>
            <td class="pl-5 text-sm">{{ item.departamento }}</td>
            <td class="pl-5 text-sm">{{ item.oficina }}</td>
            <td class="pl-5 text-sm">{{ item.estadoCuenta }}</td>
            <td class="mt-4 flex justify-center items-center">
              <button class="w-7 h-7 rounded-lg bg-green-500 text-white mr-1 flex items-center justify-center">
                <Eye />
              </button>
              <button class="w-7 h-7 rounded-lg bg-blue-500 text-white mr-1 flex items-center justify-center">
                <Eye />
              </button>
              <button class="w-7 h-7 rounded-lg bg-red-500 text-white mr-1 flex items-center justify-center">
                <Eye />
              </button>
            </td>
          </tr>
        </tbody>

      </table>
    </article>
    <footer class="flex justify-between items-center px-3 mt-4">
      <!-- Paginación dinámica con puntos suspensivos -->
      <ul class="flex list-none">
        <li @click="prevPage" :class="{ 'cursor-not-allowed': currentPage === 1 }"
          class="mr-1 px-3 py-2 border rounded cursor-pointer">
          &lt;
        </li>

        <!-- Muestra los números de página dinámicamente -->
        <template v-for="pageNumber in pageCount">
          <li v-if="showPageNumber(pageNumber)" @click="changePage(pageNumber)"
            :class="{ 'font-bold': currentPage === pageNumber }" class="mx-1 px-3 py-2 rounded cursor-pointer">
            {{ pageNumber }}
          </li>
        </template>
        <li class="mx-1 px-3 py-2 rounded cursor-pointer">
          ...
        </li>
        <li @click="changePage(10)" :class="{ 'font-bold': currentPage === 10 }"
          class="mx-1 px-3 py-2 rounded cursor-pointer">
          10
        </li>

        <li @click="nextPage" :class="{ 'cursor-not-allowed': currentPage === pageCount }"
          class="ml-1 px-3 py-2 border rounded cursor-pointer">
          >
        </li>
      </ul>

      <p class="text-sm">Mostrando 1 a 8 de 50 registros</p>
    </footer>
  </section>
</template>

<script setup lang="ts">
import CustomBtn from "../components/common/CustomBtn.vue"
import Eye from "../components/icons/Eye.vue"

import { useClerkStore } from '../stores/employes';
import { computed, ref } from 'vue';

const ClerkStore = useClerkStore();

const pageSize = ref(5);
const currentPage = ref(1);

ClerkStore.getEmployees(8, 1);
const pageCount = computed(() => Math.ceil(ClerkStore.totalEmployees / pageSize.value));

const changePage = (pageNumber: number) => {
  if (pageNumber >= 1 && pageNumber <= pageCount.value) {
    currentPage.value = pageNumber;
    ClerkStore.getEmployees(8, pageNumber);
  }
};

const prevPage = () => {
  changePage(currentPage.value - 1);
};

const nextPage = () => {
  changePage(currentPage.value + 1);
};

const showPageNumber = (pageNumber: number) => {
  // Muestra solo 1, 2, 3 y pageCount
  return pageNumber === 1 || pageNumber === 2 || pageNumber === 3;
};

const showEllipsis = (pageNumber: number) => {
  // Muestra puntos suspensivos después del 3 y antes del pageCount
  return pageNumber > 3 && pageNumber < pageCount.value;
};

</script>

<style scoped></style>