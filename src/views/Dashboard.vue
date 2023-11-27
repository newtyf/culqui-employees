<template>
  <main class="bg-gray-100 flex">
    <Aside />
    <section class="w-full h-screen">
      <Header />
      <article class="flex sm:p-8 max-h-[calc(100%-96px)]">
        <router-view></router-view>
      </article>
    </section>
  </main>
</template>

<script setup lang="ts">
import Aside from "../components/common/Aside.vue"
import Header from "../components/common/Header.vue"

import { useRouter } from 'vue-router';
const router = useRouter()
router.replace("empleados")


</script>

<style lang="scss" scoped></style>