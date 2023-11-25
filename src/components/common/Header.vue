<template>
  <header class="w-full h-24 bg-white border-b-2 border-gray-200 flex justify-end items-center">
    <div class="mr-10 flex items-center">
      <div class="w-8 h-8 bg-orange-400 text-white rounded-full grid place-items-center">
        <p class="text-sm">{{ CropName }}</p>
      </div>
      <p class="ml-2 text-sm font-semibold">{{ UserStore.$state.userData?.nombre }}</p>
    </div>
  </header>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useUserStore } from '../../stores/user';
const UserStore = useUserStore();

const CropName = computed(() => {

  const palabras = UserStore.userData?.nombre.split(" ");

  if (!palabras) {
    return "XX"
  }

  // Inicializar una cadena vacía para almacenar las iniciales
  let iniciales = "";

  // Iterar sobre cada palabra y agregar la primera letra a las iniciales
  for (const palabra of palabras) {
    iniciales += palabra[0];

    // Verificar si ya se han obtenido las dos primeras letras
    if (iniciales.length === 2) {
      break;
    }
  }

  return iniciales.toUpperCase();
})
</script>

<style scoped></style>