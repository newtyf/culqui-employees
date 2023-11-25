<template>
  <button class="border-slate-900 border-2 rounded-lg p-2 hover:bg-slate-900 hover:text-white duration-200"
    @click="action">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
defineProps(['action'])
</script>

<style lang="scss" scoped></style>