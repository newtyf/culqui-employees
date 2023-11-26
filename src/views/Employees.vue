<template>
  <section v-show="!ClerkStore.loadingClerks" class="w-full max-h-full flex flex-col bg-white rounded-xl p-6 ">
    <header class="flex justify-between md:h-14">
      <div class="h-full flex flex-col justify-center">
        <h1 class="text-2xl font-semibold">Empleados</h1>
        <p class="text-sm text-gray-500 mt-1">Gestiona tus empleados</p>
      </div>
      <div class="h-full flex">
        <button class="group/item btn-primary mx-1 w-auto md:w-40 h-full">
          <font-awesome-icon icon="fa-solid fa-file-arrow-down"
            class="group/icon inline-block w-5 group-hover/item:text-white mr-2" />
          Descargar
        </button>
        <button class="group/item btn-secondary mx-1 h-full">
          <font-awesome-icon icon="fa-solid fa-plus" class="group/icon inline-block w-5 group-hover/item:text-black mr-2" />
          Nuevo
        </button>
      </div>
    </header>
    <nav class="my-6 flex justify-between md:h-14">
      <div class="h-full w-8/12 relative">
        <input type="text" class="h-full border-2 border-slate-100 rounded-lg w-full p-4 outline-green-500"
          placeholder="Buscar empleado">
        <div class="absolute right-5 top-5 pointer-events-none">
          <img src="../assets/icons/Lens.svg" />
        </div>
      </div>
      <div class="h-full ml-4 w-4/12 relative">
        <select name="cargo" id="" class="appearance-none h-full w-full px-4 border-slate-100 border-2 rounded-lg">
          <option value="">Nombre de cargo</option>
          <option value="">Departamento</option>
          <option value="">Oficio</option>
        </select>
        <div class="absolute right-3 top-5 pointer-events-none">
          <img src="../assets/icons/ArrowBottom.svg" />
        </div>
      </div>
    </nav>
    <article class="flex flex-1 flex-col mb-4 overflow-hidden">
      <div class="grid grid-cols-6 h-16 items-center bg-gray-50 border-b-2 border-slate-100 ">
        <p class="font-bold text-gray-400 pl-5 text-sm">Nombre</p>
        <p class="font-bold text-gray-400 pl-5 text-sm">Nombre cargo</p>
        <p class="font-bold text-gray-400 pl-5 text-sm">Departamento</p>
        <p class="font-bold text-gray-400 pl-5 text-sm">Oficina</p>
        <p class="font-bold text-gray-400 pl-5 text-sm">Cuenta</p>
        <p class="font-bold text-gray-400 text-sm pr-4 flex justify-end">Acciones</p>
      </div>

      <div class="overflow-y-auto flex-1">
        <div class="grid grid-cols-6 h-16 border-b-2 items-center border-slate-100" v-for="item in ClerkStore.employees">
          <div class="pl-5 text-sm">
            <p>{{ item.nombre }}</p>
            <p class="text-gray-400 text-sm truncate">{{ item.correo }}</p>
          </div>
          <p class="pl-5 text-sm">{{ item.cargo }}</p>
          <p class="pl-5 text-sm">{{ item.departamento }}</p>
          <p class="pl-5 text-sm">{{ item.oficina }}</p>
          <p class="pl-5 text-sm">{{ item.estadoCuenta }}</p>
          <div class="pr-4 flex justify-end gap-2">
            <button class="w-8 h-8 rounded-lg bg-green-600 text-white flex items-center justify-center">
              <img src="../assets/icons/Eye.svg" class="w-4 h-4" />
            </button>
            <button class="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center">
              <img src="../assets/icons/Pen.svg" class="w-4 h-4" />
            </button>
            <button class="w-8 h-8 rounded-lg bg-red-500 text-white flex items-center justify-center">
              <img src="../assets/icons/TrashCan.svg" class="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

    </article>
    <footer class="flex justify-between items-center mt-auto px-3">
      <Pagination :total="ClerkStore.totalEmployees" :get-items="ClerkStore.getEmployees"
        :page-size="ClerkStore.pageSize" />
      <div class="h-full flex items-center">
        <p class="text-sm text-gray-500">Mostrando 1 a {{ ClerkStore.pageSize }} de {{ ClerkStore.totalEmployees }}
          registros</p>
        <div class="h-full ml-4 relative">
          <select v-model="pageSize" name="cargo"
            class="appearance-none h-full w-full pl-3 pr-8 py-2 border-slate-100 border-2 rounded-lg" @change="page">
            <template v-for="item in 12">
              <option v-if="item >= 3" :value="item">Mostrar {{ item }}</option>
            </template>
          </select>
          <div class="absolute right-3 top-1/3 pointer-events-none">
            <img src="../assets/icons/ArrowTop.svg" class="w-4" />
          </div>
        </div>
      </div>
    </footer>
  </section>
  <Squeleton v-if="ClerkStore.loadingClerks" />
</template>

<script setup lang="ts">
import Pagination from "../components/common/Pagination.vue";
import Squeleton from "../components/common/Squeleton.vue";

import { useClerkStore } from '../stores/employes';
import { ref } from "vue"

const ClerkStore = useClerkStore();
ClerkStore.getEmployees(15, 1);

const pageSize = ref(8)

const page = () => {
  console.log(pageSize.value)
  ClerkStore.getEmployees(pageSize.value, 1);
}

</script>

<style scoped>
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #d4d1d1;
  border-radius: 5px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 5px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}</style>