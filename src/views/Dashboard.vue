<template>
  <div>
    <h1>dashboard</h1>
    <div>
      <button @click="UserStore.logOutUser()">Log Out</button>
    </div>
    {{ UserStore.$state.userData?.nombre }}
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useUserStore } from '../stores/user';
const UserStore = useUserStore();
const router = useRouter()
router.push("empleados")


</script>

<style scoped></style>