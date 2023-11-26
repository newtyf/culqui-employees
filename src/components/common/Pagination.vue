<template>
  <!-- Paginación dinámica con puntos suspensivos -->
  <ul class="flex list-none h-8">
    <li @click="prevPage" :class="{ 'cursor-not-allowed': currentPage === 1 }"
      class="flex items-center mr-6 px-2 py-2 border rounded-lg cursor-pointer text-sm hover:bg-gray-100 duration-200 text-gray-400">
      &lt;
    </li>

    <!-- Muestra los números de página dinámicamente -->
    <template v-for="pageNumber in pageCount">
      <li v-if="showPageNumber(pageNumber) || (currentPage === pageNumber && currentPage !== pageCount)" @click="changePage(pageNumber)"
        :class="{ 'font-bold bg-gray-100': currentPage === pageNumber }"
        class="flex items-center px-3  rounded-lg cursor-pointer hover:bg-gray-100 text-sm">
        {{ pageNumber }}
      </li>
      <li v-if="pageNumber > 3 && pageNumber === pageCount - 1" class="mx-1 px-3 py-2 rounded cursor-pointer text-sm">
        ...
      </li>
    </template>
    <li @click="changePage(pageCount)"
        :class="{ 'font-bold bg-gray-100 ': currentPage === pageCount }"
        class="flex items-center mx-1 px-3 py-2 rounded-lg cursor-pointer hover:bg-gray-100 text-sm">
        {{ pageCount }}
      </li>

    <li @click="nextPage" :class="{ 'cursor-not-allowed': currentPage === pageCount }"
      class="flex items-center  ml-6 px-2 py-2 border rounded-lg cursor-pointer text-sm hover:bg-gray-100 duration-200 text-gray-400">
      >
    </li>
  </ul>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

const props = defineProps<{
  total: number
  getItems: Function
  pageSize: number
}>()

const currentPage = ref(1);

const pageCount = computed(() => Math.ceil(props.total / props.pageSize));

const changePage = (pageNumber: number) => {
  if (pageNumber >= 1 && pageNumber <= pageCount.value) {
    currentPage.value = pageNumber;
    props.getItems(props.pageSize, pageNumber);
  }
};

const prevPage = () => {
  if (currentPage.value === 1) {
    console.log("inicio de la paginacion")
    return
  }
  changePage(currentPage.value - 1);
};

const nextPage = () => {
  if (currentPage.value === pageCount.value) {
    console.log("final de la pagiunacio")
    return
  }
  changePage(currentPage.value + 1);
};

const showPageNumber = (pageNumber: number) => {
  // Muestra solo 1, 2, 3 y pageCount
  return pageNumber === 1 || pageNumber === 2 || pageNumber === 3;
};


</script>

<style scoped></style>