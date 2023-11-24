<template>
  <main>
    <aside></aside>
    <section>
      <header>
        <h1>dashboard</h1>
        <div>
          <button @click="UserStore.logOutUser()">Log Out</button>
        </div>
        {{ UserStore.$state.userData?.nombre }}
        <slot></slot>
      </header>
      <article>
        <slot></slot>
      </article>
    </section>
  </main>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useUserStore } from '../stores/user';
const UserStore = useUserStore();
const router = useRouter()
router.replace("empleados")
</script>

<style lang="scss" scoped></style>