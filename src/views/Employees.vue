<template>
  <section class="w-full h-full flex flex-col bg-white rounded-xl p-6">
    <header class="flex justify-between h-14">
      <div class="h-full flex flex-col justify-center">
        <h1 class="text-2xl font-semibold">Empleados</h1>
        <p class="text-sm text-gray-500 mt-1">Gestiona tus empleados</p>
      </div>
      <div>
        <CustomBtn class="mx-1 inline-block h-full">Descargar</CustomBtn>
        <CustomBtn class="mx-1 inline-block h-full">Nuevo</CustomBtn>
      </div>
    </header>
    <nav v-if="!ClerkStore.loadingClerks" class="my-6 flex justify-between h-14">
      <input type="text" class="h-full border-2 border-slate-100 rounded-lg w-8/12 p-4" placeholder="Buscar empleado">
      <select name="cargo" id="" class="h-full ml-4 w-4/12 px-2 border-2 rounded-lg">
        <option value="">Nombre de cargo</option>
        <option value="">Departamento</option>
        <option value="">Oficio</option>
      </select>
    </nav>
    <article v-if="!ClerkStore.loadingClerks" class="max-h-[calc(100%-14rem)]">
      <div class="grid grid-cols-6 h-16 items-center bg-gray-50 border-b-2 border-slate-100 ">
        <p class="font-bold text-gray-400 pl-5 text-sm">Nombre</p>
        <p class="font-bold text-gray-400 pl-5 text-sm">Nombre cargo</p>
        <p class="font-bold text-gray-400 pl-5 text-sm">Departamento</p>
        <p class="font-bold text-gray-400 pl-5 text-sm">Oficina</p>
        <p class="font-bold text-gray-400 pl-5 text-sm">Cuenta</p>
        <p class="font-bold text-gray-400 pl-5 text-sm pr-6 flex justify-end">Acciones</p>
      </div>

      <div class="overflow-y-scroll max-h-[calc(100%-5rem)]">
        <div class="grid grid-cols-6 h-16 border-b-2 items-center border-slate-100"
          v-for="item in ClerkStore.employees">
          <p class="pl-5 text-sm">{{ item.nombre }}
          <p class="text-gray-400 text-sm">{{ item.correo }}</p>
          </p>
          <p class="pl-5 text-sm">{{ item.cargo }}</p>
          <p class="pl-5 text-sm">{{ item.departamento }}</p>
          <p class="pl-5 text-sm">{{ item.oficina }}</p>
          <p class="pl-5 text-sm">{{ item.estadoCuenta }}</p>
          <div class="pr-6 flex justify-end">
            <button class="w-8 h-8 rounded-lg bg-green-600 text-white mr-1 flex items-center justify-center">
              <Eye class="w-4 h-4" />
            </button>
            <button class="w-8 h-8 rounded-lg bg-blue-600 text-white mr-1 flex items-center justify-center">
              <TrashCan class="w-4 h-4" />
            </button>
            <button class="w-8 h-8 rounded-lg bg-red-500 text-white mr-1 flex items-center justify-center">
              <Pen class="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

    </article>
    <footer class="flex justify-between items-center mt-auto px-3">
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
        <li  @click="changePage(pageCount)" :class="{ 'font-bold': currentPage === 10 }"
          class="mx-1 px-3 py-2 rounded cursor-pointer">
          {{ pageCount }}
        </li>

        <li @click="nextPage" :class="{ 'cursor-not-allowed': currentPage === pageCount }"
          class="ml-1 px-3 py-2 border rounded cursor-pointer">
          >
        </li>
      </ul>

      <p class="text-sm">Mostrando 1 a 8 de {{ ClerkStore.totalEmployees }} registros</p>
    </footer>
  </section>
</template>

<script setup lang="ts">
import CustomBtn from "../components/common/CustomBtn.vue"
import Eye from "../components/icons/Eye.vue"
import TrashCan from "../components/icons/TrashCan.vue"
import Pen from "../components/icons/Pen.vue"

import { useClerkStore } from '../stores/employes';
import { computed, ref } from 'vue';

const ClerkStore = useClerkStore();

const pageSize = ref(8);
const currentPage = ref(1);

ClerkStore.getEmployees(pageSize.value, 1);
const pageCount = computed(() => Math.ceil(ClerkStore.totalEmployees / pageSize.value));

const changePage = (pageNumber: number) => {
  if (pageNumber >= 1 && pageNumber <= pageCount.value) {
    currentPage.value = pageNumber;
    ClerkStore.getEmployees(pageSize.value, pageNumber);
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
  return pageNumber === 1 || pageNumber === 2 || pageNumber === 3 || pageNumber === pageNumber;
};

</script>

<style scoped></style>