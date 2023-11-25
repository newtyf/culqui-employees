<template>
  <aside class="h-screen bg-white w-72 flex flex-col justify-between py-6 border-r-2 border-gray-200">
    <nav class="w-full px-6">
      <picture>
        <img src="../../assets/logo_black.svg" alt="" class="mx-auto">
      </picture>
      <ul class="mt-8">
        <li class="mt-4 font-semibold flex items-center">
          <RouterLink class="group/item hover:text-green-400 duration-200" to="/empleados">
            <UsersGroup class="group/icon inline mr-2 stroke-gray-300 group-hover/item:stroke-green-400 duration-200" />
            Empleados
          </RouterLink>
        </li>
        <li class="mt-4 font-semibold flex items-center">
          <RouterLink class="group/item hover:text-green-400 duration-200" to="/empleados">
            <Suitcase class="group/icon inline mr-2 stroke-gray-300 group-hover/item:stroke-green-400 duration-200" />
            Reclutamiento
          </RouterLink>
        </li>
      </ul>
    </nav>
    <button class="border-slate-900 border-2 rounded-lg p-2 mx-6 hover:bg-slate-900 hover:text-white duration-200" @click="UserStore.logOutUser()">Salir</button>
  </aside>
</template>

<script setup lang="ts">
import UsersGroup from "../icons/UsersGroup.vue"
import Suitcase from "../icons/Suitcase.vue"

import { useUserStore } from '../../stores/user';
const UserStore = useUserStore();
</script>

<style scoped></style>