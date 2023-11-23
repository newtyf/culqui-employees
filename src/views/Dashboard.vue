<template>
  <div>
    dashboard

    {{ UserStore.$state.userData?.nombre }}
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '../stores/user';
const UserStore = useUserStore();


</script>

<style scoped>

</style>