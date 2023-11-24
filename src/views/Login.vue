<template>
  <main class="h-screen md:flex">
    <section class="md:h-full md:w-1/2">
      <div class="hidden md:block md:h-2/3">
        <img src="../assets/login.png" alt="" class="w-full h-full object-cover">
      </div>
      <div
        class="h-full bg-slate-900 text-white font-sans flex flex-col justify-center p-6 border-t-4 border-green-500 md:h-1/3 md:p-6 md:px-12 ">
        <img src="../assets/logo_white.svg" alt="" class="w-28">
        <h2 class="my-6 text-xl font-semibold md:text-3xl lg:text-4xl">Dale más power ⚡ a tus <br> empleados hoy 💪</h2>
        <p class="text-xs md:text-base">Te ayudamos a gestionarlos de manera más sencilla</p>
      </div>
    </section>
    <section class="h-2/3 flex flex-col justify-center items-center relative p-8 md:h-full md:w-1/2 md:px-20 xl:px-44">
      <h2 class="text-slate-700 text-2xl font-semibold mb-2 md:mb-6">Inicia sesión</h2>
      <form @submit.prevent="onFinish" class="w-full max-w-2xl">
        <label for="" class="block mb-3 text-slate-700">Correo electrónico<span class="text-red-500">*</span></label>
        <input type="text" v-model="formState.email"
          class="text-slate-500 w-full border-2 rounded-lg mb-2 p-2 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent">
        <label for="" class="block mb-3 text-slate-700">Contraseña <span class="text-red-500">*</span></label>
        <input type="password" name="password" id="password" v-model="formState.password"
          class="text-slate-500 w-full border-2 rounded-lg mb-2 p-2 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent">
        <p v-show="error  " class="text-red-600 flex items-center">
          <Alert class="inline mr-2" /> Correo o contraseña incorrectos
        </p>
        <button class="w-full bg-slate-950 text-white rounded-sm md:rounded-lg h-8 mt-4 md:h-14 " type="submit">Iniciar
          sesión</button>
      </form>
      <p class="text-slate-400 text-sm mt-5">¿Eres nuevo aquí? <a href="http://" class="text-green-500">Crea una
          cuenta</a></p>
      <p class="text-slate-400 text-sm absolute bottom-6">© 2023 Culqi . Todos los derechos reservados</p>
    </section>
  </main>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import { useUserStore } from "../stores/user";

import Alert from "../components/icons/Alert.vue";

const error = ref(false)

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
    case 401:
      error.value = true;
      break;
    default:
      console.log("ocurrio un error servidor")
      break;
  }
};

</script>