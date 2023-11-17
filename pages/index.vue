<script setup>
// on create
import { useAuthStore } from "@/store/auth.store";
import { useRouter } from "vue-router";
const authStore = useAuthStore();
const router = useRouter();
const { user } = authStore;
onBeforeMount(() => {
  if (Object.keys(user).length === 0) {
    router.push("/login");
  }
});
</script>

<template>
  <div>dashboard</div>
</template>
  