<template>
  <aside
    class="fixed -left-80 h-screen bg-white max-w-72 w-1/3 flex flex-col justify-between py-6 border-r-2 border-gray-200 md:relative md:left-0 ">
    <nav class="w-full px-6">
      <picture>
        <img src="../../assets/logo_black.svg" alt="" class="mx-auto">
      </picture>
      <ul class="mt-8">
        <li class="mt-4 font-semibold flex items-center">
          <RouterLink class="group/item hover:text-green-400 duration-200"
            :class="{'text-green-400' : isActive('/empleados')}" to="/empleados"
            >
            <font-awesome-icon icon="fa-solid fa-user-group" class="group-hover/item:text-green-400 duration-200 mr-2" :class="{'text-green-400' : isActive('/empleados'),
          'text-gray-300': !isActive('/empleados')}" />
            Empleados
          </RouterLink>
        </li>
        <li class="mt-4 font-semibold flex items-center">
          <RouterLink class="group/item hover:text-green-400 duration-200"
            :class="{'text-green-400' : isActive('/reclutamiento')}" to="/reclutamiento"
            >
            <font-awesome-icon icon="fa-solid fa-suitcase" class="group-hover/item:text-green-400 duration-200 mr-2" :class="{'text-green-400' : isActive('/reclutamiento'),
          'text-gray-300': !isActive('/reclutamiento')}" />
            Reclutamiento
          </RouterLink>
        </li>
      </ul>
    </nav>
    <button class="btn-primary mx-6 h-12" @click="UserStore.logOutUser()">Salir</button>
  </aside>
</template>

<script setup lang="ts">

import { useUserStore } from '../../stores/user';
import { onBeforeRouteUpdate, useRoute } from "vue-router";
import {ref} from "vue"

const UserStore = useUserStore();

const currentRoute = ref(useRoute());
onBeforeRouteUpdate(() => {
  currentRoute.value = useRoute();
});

// Función para verificar si la ruta actual coincide con la ruta proporcionada
const isActive = (route: string) => {
  return currentRoute.value.path === route;
};


</script>

<style scoped></style>