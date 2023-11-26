<template>
  <section class="w-full h-full flex flex-col bg-white rounded-xl p-6">
    <header class="flex justify-between md:h-9">
      <div class="h-full flex flex-col justify-center">
        <h1 class="text-2xl font-semibold">Empleados</h1>
      </div>
      <div class="h-full flex">
        <div class="mx-1 w-auto md:w-20 h-full bg-gray-100 rounded-full">
        </div>
      </div>
    </header>
    <nav class="my-6 flex justify-between md:h-9">
      <div class="h-full w-8/12 relative bg-gray-100 rounded-full">
      </div>
      <div class="h-full ml-4 w-4/12 relative bg-gray-100 rounded-full">
      </div>
    </nav>
    <article class="flex flex-col mb-4 overflow-hidden">
      <div class="grid grid-cols-7 grid-flow-col h-16 items-center bg-gray-50 border-b-2 border-slate-100 ">
        <div class="flex w-44">
          <div class="ml-3 bg-gray-100 rounded-full w-5 h-5"></div>
          <div class="ml-3 bg-gray-100 rounded-full flex-1 h-5"></div>
        </div>
        <div class="flex">
          <div class="ml-3 bg-gray-100 rounded-full flex-1 h-5"></div>
        </div>
        <div class="flex">
          <div class="ml-3 bg-gray-100 rounded-full flex-1 h-5"></div>
          <div class="ml-3 bg-gray-100 rounded-full w-5 h-5"></div>
        </div>
        <div class="flex">
          <div class="ml-3 bg-gray-100 rounded-full flex-1 h-5"></div>
          <div class="ml-3 bg-gray-100 rounded-full w-5 h-5"></div>
        </div>
        <div class="flex">
          <div class="ml-3 bg-gray-100 rounded-full flex-1 h-5"></div>
          <div class="ml-3 bg-gray-100 rounded-full w-5 h-5"></div>
        </div>
        <div class="flex">
          <div class="ml-3 bg-gray-100 rounded-full flex-1 h-5"></div>
          <div class="ml-3 bg-gray-100 rounded-full w-5 h-5"></div>
        </div>
        <div class="flex">
          <div class="ml-3 bg-gray-100 rounded-full flex-1 h-5"></div>
          <div class="ml-3 bg-gray-100 rounded-full w-5 h-5"></div>
        </div>
      </div>

      <template v-for="_ in 7">
        <div class="grid grid-cols-7 grid-flow-col h-16 items-center border-slate-100 border-b-2">
          <div class="flex w-44">
            <div class="ml-3 bg-gray-100 rounded-full w-5 h-5"></div>
            <div class="ml-3 bg-gray-100 rounded-full flex-1 h-5"></div>
          </div>
          <div class="flex">
            <div class="ml-3 bg-gray-100 rounded-full flex-1 h-5"></div>
          </div>
          <div class="flex">
            <div class="ml-3 bg-gray-100 rounded-full flex-1 h-5"></div>
            <div class="ml-3 bg-gray-100 rounded-full w-5 h-5"></div>
          </div>
          <div class="flex">
            <div class="ml-3 bg-gray-100 rounded-full flex-1 h-5"></div>
            <div class="ml-3 bg-gray-100 rounded-full w-5 h-5"></div>
          </div>
          <div class="flex">
            <div class="ml-3 bg-gray-100 rounded-full flex-1 h-5"></div>
            <div class="ml-3 bg-gray-100 rounded-full w-5 h-5"></div>
          </div>
          <div class="flex">
            <div class="ml-3 bg-gray-100 rounded-full flex-1 h-5"></div>
            <div class="ml-3 bg-gray-100 rounded-full w-5 h-5"></div>
          </div>
          <div class="flex">
            <div class="ml-3 bg-gray-100 rounded-full flex-1 h-5"></div>
            <div class="ml-3 bg-gray-100 rounded-full w-5 h-5"></div>
          </div>
        </div>
      </template>

    </article>
  </section>
</template>

<script setup lang="ts">

</script>
