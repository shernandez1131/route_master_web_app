<script setup>
import { useAuthStore } from "@/store/auth.store";
import { useRouter } from "vue-router";

const authStore = useAuthStore();
const router = useRouter();

const { login, validateForm } = authStore;

const state = reactive({
  email: undefined,
  password: undefined,
});

async function onSubmit(event) {
  try {
    const { data } = event;
    await login(data.email, data.password);
    router.push("/");
  } catch (error) {
    alert(error);
  }
}
</script>
<template>
  <div class="loginContainer">
    <!-- Logo -->
    <img src="~/assets/images/route_master_logo.png" class="logo"/>

    <h1 class="text-3xl mb-3 font-bold">Inicio de Sesión</h1>
    <UForm
      :validate="validateForm"
      :state="state"
      @submit="onSubmit"
      class="flex flex-col gap-2"
    >
      <UFormGroup label="Correo" name="email">
        <UInput v-model="state.email" variant="outline" placeholder="Correo" />
      </UFormGroup>
      <UFormGroup label="Contraseña" name="password">
        <UInput
          v-model="state.password"
          variant="outline"
          type="password"
          placeholder="Contraseña"
        />
      </UFormGroup>
      <UButton class="mt-4" block type="submit"> Iniciar Sesión </UButton>
    </UForm>
  </div>
</template>

<style scoped>
.loginContainer {
  width: 350px;
  margin: 0 auto; /* Center the container horizontally */
  text-align: center;
}

.logo {
  display: block;
  max-width: 150px; /* Adjust the max-width according to your design */
  margin: 0 auto 20px; /* Center the image horizontally and add margin below */
}
</style>
