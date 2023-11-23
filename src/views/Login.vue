<template>
  <div>
    <form @submit.prevent="onFinish">
      <label for="">username</label>
      <input type="text" v-model="formState.email">
      <br>
      <label for="">password</label>
      <input type="password" name="password" id="password" v-model="formState.password">
      <br>
      <button type="submit">ingresar</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { useUserStore } from "../stores/user";


const userStore = useUserStore();
//const router = useRouter();

const formState = reactive({
  email: "",
  password: "",
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

<style scoped></style>