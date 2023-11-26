<template>
  <section v-if="!ClerkStore.loadingClerks" class="w-full h-full flex flex-col bg-white rounded-xl p-6">
    <header class="flex justify-between md:h-14">
      <div class="h-full flex flex-col justify-center">
        <h1 class="text-2xl font-semibold">Reclutamiento</h1>
        <p class="text-sm text-gray-500 mt-1">Gestiona tus empleados</p>
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
  </section>
</template>

<script setup lang="ts">

import { useClerkStore } from '../stores/employes';

const ClerkStore = useClerkStore();

ClerkStore.getEmployees(5, 1);
</script>