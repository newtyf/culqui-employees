<template>
  <main class="h-screen md:flex">
    <section class="md:h-full md:w-1/2">
      <div class="hidden md:block md:h-2/3">
        <img src="../assets/login.png" alt="" class="w-full h-full object-cover">
      </div>
      <div class="h-full md:h-1/3 bg-slate-900 text-white font-sans flex flex-col justify-center p-6 md:p-0 md:px-12">
        <img src="../assets/logo_white.svg" alt="" class="w-28">
        <h2 class="my-6 text-xl font-semibold md:text-3xl lg:text-5xl">Dale más power ⚡ a tus empleados hoy 💪</h2>
        <p class="text-xs md:text-base">Te ayudamos a gestionarlos de manera más sencilla</p>
      </div>
    </section>
    <section class="h-2/3 md:h-full md:w-1/2 flex flex-col justify-center items-center p-8 md:px-36">
      <h2 class="text-2xl font-semibold mb-2 md:mb-6">Inicia sesión</h2>
      <form @submit.prevent="onFinish" class="w-full">
        <label for="" class="block mb-3">Correo electrónico<span class="text-red-500">*</span></label>
        <input type="text" v-model="formState.email" class="w-full border-2 rounded-lg mb-2 p-2 sm:h-12 md:6 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent">
        <br>
        <label for="" class="block mb-3">Contraseña <span class="text-red-500">*</span></label>
        <input type="password" name="password" id="password" v-model="formState.password" class="w-full border-2 rounded-lg mb-2 p-2 md:h-12 md:6 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent">
        <br>
        <button class="w-full bg-slate-950 text-white rounded-sm md:rounded-lg h-8 md:h-14 " type="submit">Iniciar sesión</button>
      </form>
    </section>
  </main>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { useUserStore } from "../stores/user";


const userStore = useUserStore();

const formState = reactive({
  email: "c.quispe@culqi.com",
  password: "admin123",
});

const onFinish = async () => {
  console.log(formState.email)
  const res = await userStore.loginUser(formState.email, formState.password);

  switch (res) {
    case undefined:
      console.log("Bienvenido de nuevo, cabro chico 🐲")
      break;
    default:
      console.log("ocurrio un error servidor")
      break;
  }
};

</script>