<template>
  <main class="h-screen flex flex-col md:flex-row">
    <section class="md:h-full md:w-1/2 flex flex-col">
      <div class="hidden md:block md:h-2/3">
        <img src="../assets/login.png" alt="" class="w-full h-full object-cover">
      </div>
      <div
        class="bg-slate-900 text-white font-sans p-6 border-t-4 border-green-500  md:h-1/3 md:px-12 md:pt-12 md:pb-20 ">
        <img src="../assets/logo_white.svg" alt="" class="w-28">
        <h2 class="my-6 text-2xl font-semibold md:text-3xl lg:text-5xl -rotate-1.2">Dale más power ⚡ a tus <br> empleados hoy 💪</h2>
        <p class="text-xs md:text-base">Te ayudamos a gestionarlos de manera más sencilla</p>
      </div>
    </section>
    <section class="flex flex-col flex-1 justify-center items-center relative p-8 md:h-full md:w-1/2 md:px-20 xl:px-44">
      <h2 class="text-slate-700 text-2xl font-semibold mb-2 md:mb-6">Inicia sesión</h2>
      <form @submit.prevent="onFinish" class="w-full max-w-2xl">
        <label for="" class="block mb-3 text-slate-700">Correo electrónico<span class="text-red-500">*</span></label>
        <input type="text" v-model="formState.email"
          class="text-slate-500 w-full border-2 rounded-lg mb-2 p-2 outline-green-400">
        <label for="" class="block mb-3 text-slate-700">Contraseña <span class="text-red-500">*</span></label>
        <input type="password" name="password" id="password" v-model="formState.password"
          class="text-slate-500 w-full border-2 rounded-lg mb-2 p-2 outline-green-400">
        <p v-show="error  " class="text-red-600 flex items-center">
          <img src="../assets/icons/Alert.svg" class="inline mr-2" /> Correo o contraseña incorrectos
        </p>
        <button class="w-full btn-secondary h-8 mt-4 md:h-14 " type="submit">Iniciar
          sesión</button>
      </form>
      <p class="text-slate-400 text-sm mt-5">¿Eres nuevo aquí? <a href="#" class="text-green-500">Crea una
          cuenta</a></p>
      <p class="text-slate-400 text-sm mt-auto bottom-6  md:mt-0 md:absolute">© 2023 Culqi . Todos los derechos reservados</p>
    </section>
  </main>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import { useUserStore } from "../stores/user";


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